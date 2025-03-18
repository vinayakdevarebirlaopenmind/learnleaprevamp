import React, { useState } from "react";
import "./SingUp.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { setUser } from "../../store/authSlice";
import { useGoogleAuthMutation, useSignupMutation } from "../../store/apiSlice";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [googleAuth] = useGoogleAuthMutation();
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle password visibility
  const [showPasswordRules, setShowPasswordRules] = useState(false); // 🔍 Show rules on focus

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const criteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    setPasswordCriteria(criteria);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData);

      const response = await signup(formData).unwrap();
      console.log("Signup API Response:", response);
      console.log(response.user);

      if (!response.user || !response.token) {
        setErrorMessage("Signup failed: Missing user data or token");
        return;
      }

      // ✅ Ensure both user & token are stored
      dispatch(setUser({ user: response.user, token: response.token }));
      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("user", JSON.stringify(response.user)); // <-- Fix: Ensure it's stringified

      navigate("/home");
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage(error?.data?.message || "Signup failed. Try again!");
    }
  };

  const responseGoogle = async (authResult) => {
    try {
      if (!authResult.code) throw new Error("Google authentication failed");

      const data = await googleAuth(authResult.code).unwrap();
      console.log("Google Auth Response:", data);

      if (data?.token && data?.user) {
        dispatch(setUser({ user: data.user, token: data.token }));
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

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
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
            alt="Signup Illustration"
          />
        </div>
        <div className="signup-form">
          <h1>Sign Up and Take the Leap Toward Success!</h1>
          <form onSubmit={handleSubmit}>
            {errorMessage && <p className="error-text">{errorMessage}</p>}

            <div className="input-container">
              <input
                type="text"
                name="fullName"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <label htmlFor="mobileNumber">Mobile Number</label>
            </div>

            {/* Password Field with Eye Icon */}
            <div className="input-container password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setShowPasswordRules(true)}
                onBlur={() => setShowPasswordRules(false)}
                required
              />
              <label htmlFor="password">Password</label>
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Password Strength Indicator (Visible on Click Only) */}
            {showPasswordRules && (
              <motion.div
                className="password-strength"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p>Password must include:</p>
                <ul>
                  <li className={passwordCriteria.length ? "valid" : "invalid"}>
                    ✅ At least 8 characters
                  </li>
                  <li
                    className={passwordCriteria.uppercase ? "valid" : "invalid"}
                  >
                    ✅ 1 uppercase letter
                  </li>
                  <li
                    className={passwordCriteria.lowercase ? "valid" : "invalid"}
                  >
                    ✅ 1 lowercase letter
                  </li>
                  <li className={passwordCriteria.number ? "valid" : "invalid"}>
                    ✅ 1 number
                  </li>
                  <li
                    className={
                      passwordCriteria.specialChar ? "valid" : "invalid"
                    }
                  >
                    ✅ 1 special character
                  </li>
                </ul>
              </motion.div>
            )}

            <button type="submit">Create an account</button>
            <div>
              <h4 className="or-option">OR</h4>
            </div>
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

export const TestComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      Tailwind CSS is working! 🎉
    </div>
  );
};
