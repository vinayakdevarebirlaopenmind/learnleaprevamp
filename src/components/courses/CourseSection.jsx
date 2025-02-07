import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CourseSection.css";

const categories = [
  "Data Science",
  "IT Certifications",
  "Leadership",
  "Web Development",
  "Communication",
  "Business Analytics & Intelligence",
];

const courses = [
  {
    title: "Certificate Program for ECCEd",
    instructor: "Sandeep Pinto, RShreya Ghoshal, Dr. Sunita George",
    rating: 4.4,
    reviews: "9,070",
    price: "₹10,000*",
    oldPrice: "₹13,499*",
    image:
      "https://birlalearnleap.com/media/cache/lg/26d796cb7beb9d6a953afc096d5501a689813933.jpg",
    route: "/ecced-certificate", // Add route for course
  },
  {
    title: "Diploma Program for ECCEd",
    instructor: "Priya Gopal, Dr. Sunita George, Sandeep Pinto",
    rating: 4.5,
    reviews: "153",
    price: "₹35,000*",
    oldPrice: "₹40,999*",
    image:
      "https://birlalearnleap.com/media/cache/lg/449ebc4f2f7e15c2b1f06b0843bb23586612a9ee.jpg",
    route: "/ecced-diploma", // Add route for course
  },
  {
    title: "Certificate Program for K12 Teachers",
    instructor: "Priya Gopal, Dr. Sunita George",
    rating: 4.4,
    reviews: "128",
    price: "₹10,000*",
    oldPrice: "₹13,499*",
    image:
      "https://birlalearnleap.com/media/cache/lg/55fca700a276414de12f141b89a54be87de8c6d9.jpg",
    route: "/k12-certificate", // Add route for course
  },
  {
    title: "Certificate Program for Leadership in Education",
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: "₹10,000*",
    oldPrice: "₹15,000*",
    image:
      "https://birlalearnleap.com/media/cache/lg/dfb1f9348970f0f137e261d5e9d0731b1382f36c.jpg",
    route: "/leadership-in-education", // Add route for course
  },
  {
    title: "Burlington English Program",
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: "₹12,000*",
    oldPrice: "₹17,000*",
    image:
      "https://birlalearnleap.com/media/cache/lg/af5102bc12187f2ef1056a01e79f85912785040c.jpg",
    route: "/burlington-english", // Add route for course
  },
];

export default function CourseSection() {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleCourseClick = (route) => {
    navigate(route); // Navigate to the course's route
  };

  return (
    <div className="course-section">
      <h2
        className="outlined-text"
        data-text="All the skills you need in one place"
        style={{ "--x": position.x, "--y": position.y }}
        onMouseMove={handleMouseMove}
      >
        All the skills you need in one place
      </h2>
      <p className="subheading">
        Empowering Your Growth From Essential Skills to Cutting-Edge Expertise!
      </p>

      {/* Course Cards */}
      <div className="course-list">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card"
            onClick={() => handleCourseClick(course.route)} // Add click event handler
          >
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-details">
              <p className="course-title">{course.title}</p>
              <p className="instructor">{course.instructor}</p>
              <p className="rating">
                ⭐⭐⭐⭐ {course.rating} ({course.reviews} reviews)
              </p>
              <p className="price">
                <span className="current-price">{course.price}</span>
                <span className="old-price">{course.oldPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
