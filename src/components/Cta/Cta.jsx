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
          Follow Us on social media to stay tuned on more projects.
        </p>
        <a
          href="https://twitter.com/juxtopposed"
          target="_blank"
          className="primary-button"
        >
          Stay Tuned
        </a>
      </div>
    </div>
  );
}

export default Cta;
