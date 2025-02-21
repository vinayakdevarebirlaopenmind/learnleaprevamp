import React, { useState } from "react";
import "./SingUp.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { setUser } from "../../store/authSlice";
import { useGoogleAuthMutation } from "../../store/apiSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const [googleAuth] = useGoogleAuthMutation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
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
        navigate("/home");
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
      <div className="signup-container">
        <div className="signup-image">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="Signup Illustration"
          />
        </div>
        <div className="signup-form">
          <h1>Sign up with email</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label htmlFor="fullName">Full name</label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="Email">Email</label>
            </div>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383L8.472 9.5a1 1 0 0 1-1.055 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />
              </svg>
              Continue with Email
            </button>
            <button type="button" onClick={googleLogin}>
              Continue with <FcGoogle size={20} style={{ marginLeft: "8px" }} />
            </button>
          </form>

          <p className="signup-terms">
            By signing up, you agree to our <a href="#">Terms of Use</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          <p className="signup-login">
            Already have an account?{" "}
            <a href="#" onClick={() => navigate("/login")}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
