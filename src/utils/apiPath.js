export const BASE_URL = "https://interviewprep-backend-7j5j.onrender.com";

export const API_PATH = {
  AUTH: {
    REGISTER: "api/auth/register", //SignUp
    LOGIN: "api/auth/login", //Authenticate user and return JWT token
    GET_PROFILE: "/api/auth/profile", //get Logged in User
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/media/upload-image", //Upload Profile Picture
    DELETE_IMAGE: "/api/media/delete-image",
  },
  SESSION: {
    CREATE: "/api/sessions/create", //Create a new interview sessions with questions
    GET_ALL: "/api/sessions/my-sessions", //Get all user seesion
    GET_ONE: (id) => `/api/sessions/${id}`, //Get session details with question
    DELETE: (id) => `/api/sessions/${id}`, //Delete a session
  },

  QUESTION: {
    ADD_TO_SESSION: "/api/questions/add", //Add more question to a session
    PIN: (id) => `/api/questions/${id}/pin`, //Pin or unpin a question
    UPDATE_NOTE: (id) => `/api/questions/${id}/note`, //Update / Add a note to a question
  },
  AI: {
    GENERATE_QUESTION: "/api/ai/generate-question", //Generate Interview question and answer using GEMINI
    GENERATE_EXPLANATION: "/api/ai/generate-explanation", //Generate Concept Explanation using GEMINI
  },
};
