import React from "react";
import "./AboutUs.css";
import {
  FaGraduationCap,
  FaLaptop,
  FaGlobe,
  FaClock,
  FaUsers,
  FaMoneyBillAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "../header";
import VissionImage from "../../assets/image/shared-vision.png";
import MissionImage from "../../assets/image/target.png";
import Learnleaplogo from "../../assets/image/LearnLeap Final Logo.png";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import CourseSection from "../courses/CourseSection";
import ModernFooter from "../Footer/Footer";

const features = [
  {
    icon: <FaLaptop />,
    title: "Flexible Learning",
    description: "Asynchronous courses for work-life balance.",
  },
  {
    icon: <FaUsers />,
    title: "Accessibility",
    description: "Learn anytime, anywhere.",
  },
  {
    icon: <FaGraduationCap />,
    title: "100% Placement Assistance",
    description: "For career advancement.",
  },
  {
    icon: <FaClock />,
    title: "Live Lectures",
    description: "For all the courses.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Recorded Sessions",
    description: "Of the live lectures post the sessions.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Networking",
    description: "Connect with educators worldwide.",
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Easy EMI options",
    description: "For the students.",
  },
  {
    icon: <FaGraduationCap />,
    title: "100+ Years of Educational Legacy",
    description: "Under Birla Open Minds.",
  },
  {
    icon: <FaUsers />,
    title: "Expert-led Lectures",
    description: "Sessions led by seasoned subject matter experts.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-us-container">
        <section className="about-intro">
          <h2 className="common-heading">ABOUT US</h2>
          <p className="common-title">
            WHAT IS {""}
            <span className="color-effect">LEARNLEAP?</span>
          </p>

          <p>
            LearnLeap is an innovative upskilling academy, designed to bridge
            the skill gap in education and professional development. It aims to
            empower educators, leader educators and professionals with the
            latest practices, teaching methodologies, industry-relevant skills
            with the tools, knowledge and resources one need to thrive in your
            career and beyond.
          </p>
        </section>

        <section className="about-mission-vision">
          <div className="mission">
            <img src={MissionImage} alt="Mission Icon" />
            <h3>MISSION</h3>
            <p>
              LearnLeap's mission is to make world-class content universally
              accessible, empowering individuals to transform their lives and
              careers through online learning.
            </p>
          </div>
          <div className="vision">
            <img src={VissionImage} alt="Vision Icon" />
            <h3>VISION</h3>
            <p>
              We envision a world where anyone, anywhere can harness the
              transformative power of learning to shape their future and achieve
              their dreams.
            </p>
          </div>
        </section>
      </div>
      <section className="about-footer">
        <h2 className="common-heading">LEARN TODAY, LEAD TOMORROW.</h2>
        <p className="common-title">
          WHY CHOOSE {""}
          <span className="color-effect">LEARNLEAP?</span>
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CourseSection />
      {/* <div className="how-to-join">
          <p className="common-title">
            HOW {""}
            <span className="color-effect">TO JOIN?</span>
          </p>

          <div className="contact-details">
            <p>
              <FaPhone /> +91 9137958701
            </p>
            <p>
              <FaWhatsapp /> +91 7977768801
            </p>
            <p>
              <FaEnvelope /> info@learnleap.com
            </p>
            <p>
              <FaGlobe />{" "}
              <a
                href="https://birlalearnleap.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                birlalearnleap.com
              </a>
            </p>
            <p>
              <FaLinkedin />{" "}
              <a
                href="https://www.linkedin.com/company/birla-learnleap"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <FaInstagram />
              <a
                href="https://www.instagram.com/birlalearnleap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
      </div> */}
      <ModernFooter />
    </>
  );
};

export default AboutUs;
