import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosIntsance";
import { API_PATH } from "../../utils/apiPath";
import { UserContext } from "../../context/UserContext";
import SpinnerLoader from "../../components/loader/SpinnerLoader";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Please Enter a Valid a email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
    try {
      SetIsLoading(true);
      const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, {
        email,
        password,
      });

      console.log("Response", response);

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error("Login error:", err);

      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err?.message) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      SetIsLoading(false);
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col  justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
        Please enter your details to log in{" "}
      </p>
      <form onSubmit={handleLogin} action="">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="shubham7713@gmail.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 charecters"
          type="password"
        />
        {error && <p className="text-red-600 text-xs pb-2.5">{error}</p>}
        <button className="btn-primary" disabled={isLoading}>
          {isLoading ? <SpinnerLoader /> : "Login"}
        </button>
        <p className="text-[13px] text-slate-800 mt-3">
          don't have an account?
          <button
            className="font-mdium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            signup
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
