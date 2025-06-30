import { AnimatePresence, motion } from "framer-motion";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { LuCircleAlert, LuListCollapse } from "react-icons/lu";
import { useParams } from "react-router-dom";
import SpinnerLoader from "../../components/loader/SpinnerLoader";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layout/DashboardLayout";
import RoleInfoHeader from "./components/RoleInfoHeader";
import axiosInstance from "../../utils/axiosIntsance";
import { API_PATH } from "../../utils/apiPath";
import QuestionCard from "../../components/cards/QuestionCard";
import AIResponswPreview from "../../components/cards/AIResponswPreview";
import Drawer from "../../components/Drawer";
import SkaletonLoader from "../../components/loader/SkaletonLoader";

const InterviewPrep = () => {
  const { sessionid } = useParams();
  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLeanMoreDrawer, setOpenLeanMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  //Fetch session data by session id
  const fetchSessionDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATH.SESSION.GET_ONE(sessionid)
      );
      if (response.data && response.data.session) {
        setSessionData(response.data.session);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Generate Concept Explanation
  const generateConceptExplanation = async (question) => {
    try {
      setErrorMsg("");
      setExplanation(null);

      setIsLoading(true);
      setOpenLeanMoreDrawer(true);

      const response = await axiosInstance.post(
        API_PATH.AI.GENERATE_EXPLANATION,
        {
          question,
        }
      );
      if (response.data) {
        setExplanation(response.data);
      }
    } catch (error) {
      setExplanation(null);
      setErrorMsg("Failed to generate explanation,Try again later");
      console.error("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //Pin Question
  const toggleQuestionPinStatus = async (questionId) => {
    try {
      const response = await axiosInstance.post(
        API_PATH.QUESTION.PIN(questionId)
      );
      console.log(response);

      if (response.data && response.data.question) {
        //toast.success('Question pinned successfully!');
        fetchSessionDetailsById();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Add more question to a session
  const uploadMoreQuestion = async () => {
    try {
      setIsUpdateLoader(true);
      //Call  AI API to generate questions
      const aiResponse = await axiosInstance.post(
        API_PATH.AI.GENERATE_QUESTION,
        {
          role: sessionData?.role,
          experience: sessionData?.experience,
          topicsToFocus: sessionData?.topicsToFocus,
          numberOfQuestions: 10,
        }
      );
      //Should be array like [{question,answer}, ...]
      const generatedQuestions = aiResponse.data;
      const response = await axiosInstance.post(
        API_PATH.QUESTION.ADD_TO_SESSION,

        {
          sessionId: sessionid,
          questions: generatedQuestions,
        }
      );
      if (response.data) {
        toast.success("Added more Q&A !");

        fetchSessionDetailsById();
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Something went wrong, please try again later");
      }
    } finally {
      setIsUpdateLoader(false);
    }
  };
  useEffect(() => {
    if (sessionid) {
      fetchSessionDetailsById();
    }
    return () => {};
  }, []);

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ""}
        topicsToFocus={sessionData?.topicsToFocus || ""}
        experience={sessionData?.experience || "-"}
        questions={sessionData?.questions?.length || "-"}
        description={sessionData?.description || ""}
        lastUpdated={
          sessionData?.updatedAt
            ? moment(sessionData.updatedAt).format("Do MMM YYYY")
            : ""
        }
      />

      <div className="container mx-auto pt-4 pb-4 px-4 md:px-0">
        <h1 className="text-lg font-semibold color-black ">
          Interview and Q&A
        </h1>

        <div className="grid grid-cols-12 gap-4 mt-5 mb-10">
          <div
            className={`col-span-12 ${
              openLeanMoreDrawer ? "md:col-span-7" : "md:col-span-8"
            }`}
          >
            <AnimatePresence>
              {sessionData?.questions?.map((data, index) => {
                return (
                  <motion.div
                    key={data._id || index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                      damping: 15,
                    }}
                    layout //this the key prop tha animates position changes
                    layoutId={`question-${data._id || index}`} //Helps frammer track specific items
                  >
                    <>
                      <QuestionCard
                        question={data?.question}
                        answer={data?.answer}
                        onLearnMore={() =>
                          generateConceptExplanation(data.question)
                        }
                        isPinned={data?.isPinned}
                        onTogglePin={() => toggleQuestionPinStatus(data._id)}
                      />

                      {!isLoading &&
                        sessionData?.questions?.length == index + 1 && (
                          <div className="flex items-center justify-center mt-5 ">
                            <button
                              className="flex items-center gap-3 text-sm text-white font-medium bg-black px-5 py-2 mr-2 rounded text-nowrap cursor-pointer"
                              disabled={isLoading || isUpdateLoader}
                              onClick={uploadMoreQuestion}
                            >
                              {isUpdateLoader ? (
                                <SpinnerLoader />
                              ) : (
                                <LuListCollapse className="text-lg " />
                              )}{" "}
                              Load More
                            </button>
                          </div>
                        )}
                    </>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <Drawer
            isOpen={openLeanMoreDrawer}
            onClose={() => setOpenLeanMoreDrawer(false)}
            title={!isLoading && explanation?.title}
          >
            {errorMsg && (
              <p className="flex gap-2 text-sm text-amber-600 font-medium">
                <LuCircleAlert className="mt-1" />
                {errorMsg}
              </p>
            )}
            {isLoading && <SkaletonLoader />}
            {!isLoading && explanation && (
              <AIResponswPreview content={explanation?.explanation} />
            )}
          </Drawer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InterviewPrep;
