import React from "react";
import Header from "../header";
import CourseSection from "../courses/CourseSection";
import { HeroSection } from "../Herosection/HeroSection";
import Footer from "../Footer/Footer";
import PartnersCarousel from "../Partners/Partners";
import Cta from "../Cta/Cta";
import TestimonialList from "../Testimonial/TestimonialList";
import FAQPage from "../FAQ/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnersCarousel />
      <TestimonialList/>
      <FAQPage/>
      <Cta />
    </>
  );
};

export default Home;
