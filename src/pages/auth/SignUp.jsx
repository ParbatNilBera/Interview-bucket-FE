import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosIntsance";
import { API_PATH } from "../../utils/apiPath";
import uploadImage from "../../utils/uploadImage";
import SpinnerLoader from "../../components/loader/SpinnerLoader";

const SignUp = ({ setCurrentPage }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Form Submit
  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageURL = "";
    if (!fullName) {
      setError("Please Enter Your Full Name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
    // SignUp API Call
    try {
      //Upload Image if Present
      if (profilePicture) {
        const imageUploadRes = await uploadImage(profilePicture);
        profileImageURL = imageUploadRes.imageUrl || " ";
      }
      setIsLoading(true);
      const response = await axiosInstance.post(API_PATH.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageURL: profileImageURL,
      });
      console.log("response=\n", response);
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please Try again later");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col  justify-center">
      <h3 className="text-lg font-semibold text-black">Create An Account </h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
        Join us today by entering your details below
      </p>
      <form onSubmit={handleSignup}>
        <ProfilePhotoSelector
          image={profilePicture}
          setImage={setProfilePicture}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="Subham"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => SetEmail(target.value)}
            label="Email Address"
            placeholder="johndoe@gmail.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Charecters"
            type="password"
          />
          {error && <p className="text-red-600 text-xs pb-2.5">{error}</p>}
          <button className="btn-primary" disabled={isLoading}>
            {isLoading ? <SpinnerLoader /> : "SignUp"}
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?
            <button
              className="font-mdium text-primary underline cursor-pointer"
              onClick={() => {
                setCurrentPage("login");
              }}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
