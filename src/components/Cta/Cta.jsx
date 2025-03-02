import React from "react";
import './Cta.css'
function Cta() {
  return (
    <div>
      <div className="cta-section" id="end">
        <h1>
          Your <span className="color-effect">Journey</span> Shouldn't End Here.
        </h1>
        <p className="subtitle">
        Interested in becoming an instructor? Click below to apply now!
        </p>
        <a
          className="primary-button"
        >
          Apply here 
        </a>
      </div>
    </div>
  );
}

export default Cta;
