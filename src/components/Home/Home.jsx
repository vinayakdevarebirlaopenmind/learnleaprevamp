import React from "react";
import Header from "../header";
import CourseSection from "../courses/CourseSection";
import { HeroSection } from "../Herosection/HeroSection";
import Footer from "../Footer/Footer";
import PartnersCarousel from "../Partners/Partners";
import Cta from "../Cta/Cta";
import TestimonialList from "../Testimonial/TestimonialList";
import FAQPage from "../FAQ/Faq";
import FAQsection from "../FAQ/Faq";
import VideoTestimonialSection from "../VideoTestimonial/VideoTestimonialSection";
import OurOfferings from "../OurOfferings/OurOfferings";
import {
  FaGraduationCap,
  FaLaptop,
  FaGlobe,
  FaClock,
  FaUsers,
  FaMoneyBillAlt,
  FaWhatsapp,
} from "react-icons/fa";
import VissionImage from "../../assets/image/shared-vision.png";
import MissionImage from "../../assets/image/target.png";
import ModernFooter from "../Footer/Footer";
const Home = () => {
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

  return (
    <>
      <Header />
      <HeroSection />
      <PartnersCarousel />
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
      {/* <section className="about-footer">
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
      </section> */}
      <OurOfferings />

      <TestimonialList />
      <VideoTestimonialSection />
      <FAQsection />
      <Cta />
      <ModernFooter/>
    </>
  );
};

export default Home;
