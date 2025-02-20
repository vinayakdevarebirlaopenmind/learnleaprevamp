import React, { useState } from "react";
import "./SingUp.css";
import Header from "../header";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
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
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="signup-container">
        {/* Left Side - Image (Hidden in Mobile View) */}
        <div className="signup-image">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt="Signup Illustration"
          />
        </div>

        {/* Right Side - Form */}
        <div className="signup-form">
          <h1>Sign up with email</h1>

          {/* <label className="signup-checkbox">
            <input type="checkbox" defaultChecked /> Send me special offers,
            personalized recommendations, and learning tips.
          </label> */}

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

            {/* <button type="submit">Continue with email</button> */}

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
              Continue with email
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
