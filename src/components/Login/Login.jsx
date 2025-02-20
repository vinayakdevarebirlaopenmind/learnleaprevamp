import React, { useState } from "react";
import "./Login.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      console.log(authResult);
    } catch (error) {
      console.log("Error while requesting google code", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-image">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="login Illustration"
          />
        </div>

        <div className="login-form">
          <h1>Log in to continue your learning journey</h1>

          <form>
            <button onClick={googleLogin}>
              Continue with
              <FcGoogle size={20} style={{ marginRight: "8px" }} />
            </button>
          </form>
          <p className="login-login">
            Don't have an account?{" "}
            <a href="#" onClick={() => navigate("/signup")}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
