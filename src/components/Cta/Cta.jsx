import React from "react";
import "./Cta.css";
import { useNavigate } from "react-router-dom";

function Cta() {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/applyasintructor"); // Navigates within the app
  };

  return (
    <div>
      <div className="cta-section" id="end">
        <h1>
          Your <span className="color-effect">Journey</span> Shouldn't End Here.
        </h1>
        {/* <p className="subtitle">
          Interested in becoming an instructor? Click below to apply now!
        </p> */}
        <p className="subtitle">Apply for a Career with Us.</p>
        <button className="join-btn" onClick={handleApply}>
          Apply here
        </button>
      </div>
    </div>
  );
}

export default Cta;
