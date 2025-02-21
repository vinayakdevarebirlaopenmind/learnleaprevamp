import React from "react";
import "./Login.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleAuthMutation } from "../../store/apiSlice";
import { setUser } from "../../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleAuth] = useGoogleAuthMutation();

  const responseGoogle = async (authResult) => {
    try {
      if (!authResult.code) throw new Error("Google authentication failed");

      // Send code to backend
      const data = await googleAuth(authResult.code).unwrap();
      console.log("Google Auth Response:", data); // ✅ Debugging

      if (data?.token && data?.user) {
        // ✅ Save user & token in Redux and LocalStorage
        dispatch(setUser({ user: data.user, token: data.token }));
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Navigate to Profile Page
        navigate("/profile");
      } else {
        console.error("Invalid response from server:", data);
      }
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Google Login Error:", error),
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

          <button type="button" onClick={googleLogin}>
            Continue with <FcGoogle size={20} style={{ marginLeft: "8px" }} />
          </button>

          <p className="login-login">
            Don't have an account?
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
