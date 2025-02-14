import React from "react";
import Header from "../header";
import CourseSection from "../courses/CourseSection";
import { HeroSection } from "../Herosection/HeroSection";
import Footer from "../Footer/Footer";
import PartnersCarousel from "../Partners/Partners";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnersCarousel/>
      <CourseSection />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
