import React from "react";
import Header from "../header";
import CourseSection from "../courses/CourseSection";
import { HeroSection } from "../Herosection/HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CourseSection />
    </>
  );
};

export default Home;
