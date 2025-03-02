import React, { useRef } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import Cursor from "./Cursor";
import CourseSection from "../courses/CourseSection";

export const HeroSection = () => {
  const navigate = useNavigate();

  // Reference for the Courses section
  const coursesRef = useRef(null);

  // Scroll to the Courses section when Browse Courses button is clicked
  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="background-image-hero-section">
        <div className="herosection-container">
          <div className="herosection-text-content">
            <h1>Bridging Knowledge,</h1>
            <h1>
              Building <span className="color-effect">Careers</span>
            </h1>
            <p>
              Start, switch, or advance your career with our courses,
              Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <div className="cta-buttons">
              <button
                className="join-btn"
                onClick={() => navigate("/enquireform")}
              >
                Join For Free
              </button>
              <button className="business-btn" onClick={scrollToCourses}>
                Browse Courses
              </button>
            </div>
          </div>
          <div className="image-content">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40"
              alt="Person smiling"
            />
          </div>
        </div>
      </div>
      {/* Courses Section */}
      <div ref={coursesRef}>
        <CourseSection />{" "}
      </div>
    </>
  );
};
