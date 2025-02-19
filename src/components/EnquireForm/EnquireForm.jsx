import React from "react";
import "../EnquireForm/EnquireForm.css";
import Header from "../header";

const EnquireForm = () => {
  return (
    <>
      <Header />
      <div className="enquireform-container">
        <div className="enquireform-left">
          <h1>Welcome Back</h1>
          <p>Sign in to your existing account to continue</p>
          <img
            src="https://demo.plainadmin.com/assets/images/auth/signin-image.svg"
            alt="Illustration"
            className="enquireform-image"
          />
        </div>

        <div className="enquireform-right">
          <h2>Enquire Form</h2>
          <p>
            Start creating the best possible user experience for your customers.
          </p>

          <form className="enquireform">
            <label>Email</label>
            <input type="email" placeholder="Email" required />

            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquireForm;
