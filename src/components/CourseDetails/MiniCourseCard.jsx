import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import "./MiniCourseCard.css";
import CourseImage from "../../assets/image/k12-image.webp";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence A-Z 2025: Build 7 AI + LLM & ChatGPT",
    rating: 4.4,
    students: "311,193",
    bestseller: true,
    totalHours: "15.5 total hours",
    updated: "2/2025",
    currentPrice: "₹669",
    oldPrice: "₹3,999",
    image: CourseImage,
  },
  {
    id: 2,
    title: "Machine Learning Masterclass 2025: Hands-on Projects & AI",
    rating: 4.7,
    students: "152,431",
    bestseller: false,
    totalHours: "12 total hours",
    updated: "1/2025",
    currentPrice: "₹799",
    oldPrice: "₹4,499",
    image: CourseImage,
  },
  {
    id: 3,
    title: "Deep Learning with Python & TensorFlow 2025: From Scratch",
    rating: 4.5,
    students: "189,512",
    bestseller: true,
    totalHours: "18 total hours",
    updated: "12/2024",
    currentPrice: "₹899",
    oldPrice: "₹5,999",
    image: CourseImage,
  },
  {
    id: 4,
    title: "Deep Learning with Python & TensorFlow 2025: From Scratch",
    rating: 4.5,
    students: "189,512",
    bestseller: true,
    totalHours: "18 total hours",
    updated: "12/2024",
    currentPrice: "₹899",
    oldPrice: "₹5,999",
    image: CourseImage,
  },
];

const MiniCourseCard = ({ course }) => {
  return (
    <div className="mini-course">
      <img src={course.image} alt="Course" className="mini-course-image" />
      <div className="mini-course-info">
        <h3 className="mini-course-title">{course.title}</h3>
        <span className="mini-current-price">{course.currentPrice}</span>
        <span className="mini-old-price">{course.oldPrice}</span>
        <div className="mini-course-rating">
          <span className="mini-rating">{course.rating}</span>
          <FaStar className="mini-star-icon" />
          <FaUser className="mini-user-icon" />
          <span className="mini-students">{course.students}</span>
        </div>
        <div className="mini-course-meta">
          {course.bestseller && (
            <span className="mini-bestseller">Bestseller</span>
          )}
          <span className="mini-total-hours">{course.totalHours}</span>
          <span className="mini-updated">• Updated {course.updated}</span>
        </div>
      </div>

      <button className="mini-wishlist-btn">♡</button>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="mini-course-list">
      {courses.map((course) => (
        <MiniCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
