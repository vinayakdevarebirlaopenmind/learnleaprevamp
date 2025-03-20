import React, { useState } from "react";
import "./Login.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleAuthMutation, useLoginMutation } from "../../store/apiSlice"; // ✅ Import useLoginMutation
import { setUser } from "../../store/authSlice";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginPage from "../../assets/image/login.png";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleAuth] = useGoogleAuthMutation();
  const [login] = useLoginMutation(); // ✅ Use login mutation

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);

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

  // ✅ Corrected handleSubmitLogin function
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in with:", formData);

      const response = await login(formData).unwrap(); // ✅ Call login API
      console.log("Login Response:", response);

      dispatch(setUser({ user: response.user, token: response.token }));
      localStorage.setItem("accessToken", response.token); // ✅ Store token

      navigate("/home");
    } catch (error) {
      setErrorMessage(error?.data?.message || "Login failed. Try again!");
    }
  };

  // ✅ Fixed Google Login response handling
  const responseGoogle = async (authResult) => {
    try {
      if (!authResult.code) throw new Error("Google authentication failed");

      const data = await googleAuth(authResult.code).unwrap();
      console.log("Google Auth Response:", data);

      if (data?.token && data?.user) {
        dispatch(setUser({ user: data.user, token: data.token }));
        localStorage.setItem("accessToken", data.token); // ✅ Fixed key name
        localStorage.setItem("user", JSON.stringify(data.user));

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
          <img src={LoginPage} alt="Login Illustration" />
        </div>

        <div className="login-form">
          <h1>Log in to continue your learning journey</h1>
          {errorMessage && <p className="error-text">{errorMessage}</p>}

          <form onSubmit={handleSubmitLogin}>
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

            {/* Password Strength Indicator */}
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

            <button type="submit">Log In</button>

            <div>
              <h4 className="or-option">OR</h4>
            </div>

            <button type="button" onClick={googleLogin}>
              Continue with <FcGoogle size={20} style={{ marginLeft: "8px" }} />
            </button>
          </form>

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
