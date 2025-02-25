import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import Cursor from "./Cursor";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="herosection-container">
        <div className="herosection-text-content">
          <h1>Bridging Knowledge,</h1>
          <h1>Building Careers</h1>
          <p>
            Start, switch, or advance your career with our courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="cta-buttons">
            <button className="join-btn" onClick={() => navigate("/enquireform")}>
              Join For Free
            </button>
            <button className="business-btn">Browse Courses</button>
          </div>
        </div>
        <div className="image-content">
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40"
            alt="Person smiling"
          />
        </div>
      </div>
      {/* <Cursor/> */}
    </>
  );
};

// export default Section;
