import React, { useRef, useState, useEffect } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseSection from "../courses/CourseSection";
import HeroImage from "../../assets/image/Herosectionimage.png";
import MandtoryForm from "../MandtoryForm/MandtoryForm";

export const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Reference for the Courses section
  const coursesRef = useRef(null);
  const [openMandatoryForm, setOpenMandatoryForm] = useState(false);

  useEffect(() => {
    // Show modal only if user exists and mobile number is empty or null
    if (user && (!user.mobile || user.mobile.trim() === "")) {
      setOpenMandatoryForm(true);
    }
  }, [user]);

  // Scroll to the Courses section when Browse Courses button is clicked
  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to handle form submission and close modal
  const handleFormSubmit = (updatedUser) => {
    console.log("Updated User:", updatedUser);

    // Retrieve existing user data from localStorage
    let existingUser = JSON.parse(localStorage.getItem("user")) || {};

    // Merge updated user data with existing user data
    const newUserData = { ...existingUser, ...updatedUser };

    // Store updated user in localStorage
    localStorage.setItem("user", JSON.stringify(newUserData));

    setOpenMandatoryForm(false); // Close modal after updating localStorage
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
                Enquiry
              </button>
              <button className="business-btn" onClick={scrollToCourses}>
                Browse Courses
              </button>
            </div>
          </div>
          <div className="image-content">
            <img src={HeroImage} alt="Person smiling" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div ref={coursesRef}>
        <CourseSection />
      </div>

      {/* Mandatory Form Modal - Opens only if user.mobile is empty */}
      {openMandatoryForm && (
        <MandtoryForm open={openMandatoryForm} handleClose={handleFormSubmit} />
      )}
    </>
  );
};
