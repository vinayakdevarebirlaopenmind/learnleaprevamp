import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ 
        left: `${cursorPosition.x}px`, 
        top: `${cursorPosition.y}px` 
      }}></div>

      <div className="herosection-container">
        <div className="herosection-text-content">
          <h1 className="hover-effect">Bridging Knowledge, Building Careers <span className="rocket">🚀</span></h1>
          {/* <h1 className="hover-effect">
           
          </h1> */}
          <p className="hover-effect">
            Start, switch, or advance your career with more than 10,000 courses,
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
    </>
  );
};
