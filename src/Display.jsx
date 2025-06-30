import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/home/Dashboard";
import InterviewPrep from "./pages/interviewPrep/InterviewPrep";

const Display = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/interview-prep/:sessionid"
            element={<InterviewPrep />}
          />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
};

export default Display;
