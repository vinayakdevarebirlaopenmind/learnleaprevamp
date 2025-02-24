import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import "./CourseSection.css";

const courses = [
  {
    id: 1,
    title: "Certificate Program for ECCEd",
    instructor: "Sandeep Pinto, RShreya Ghoshal, Dr. Sunita George",
    rating: 4.4,
    reviews: "9,070",
    price: "₹10,000",
    oldPrice: "₹13,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/26d796cb7beb9d6a953afc096d5501a689813933.jpg",
    route: "/ecced-certificate",
  },
  {
    id: 2,
    title: "Diploma Program for ECCEd",
    instructor: "Priya Gopal, Dr. Sunita George, Sandeep Pinto",
    rating: 4.5,
    reviews: "153",
    price: "₹35,000",
    oldPrice: "₹40,999",
    image:
      "https://birlalearnleap.com/media/cache/lg/449ebc4f2f7e15c2b1f06b0843bb23586612a9ee.jpg",
    route: "/ecced-diploma",
  },
  {
    id: 3,
    title: "Certificate Program for K12 Teachers",
    instructor: "Priya Gopal, Dr. Sunita George",
    rating: 4.4,
    reviews: "128",
    price: "₹10,000",
    oldPrice: "₹13,499",
    image:
      "https://birlalearnleap.com/media/cache/lg/55fca700a276414de12f141b89a54be87de8c6d9.jpg",
    route: "/k12-certificate",
  },
  {
    id: 4,
    title: "Certificate Program for Leadership in Education",
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: "₹10,000",
    oldPrice: "₹15,000",
    image:
      "https://birlalearnleap.com/media/cache/lg/dfb1f9348970f0f137e261d5e9d0731b1382f36c.jpg",
    route: "/leadership-in-education",
  },
  {
    id: 5,
    title: "Burlington English Program",
    instructor: "Priya Gopal,  Sandeep Pinto",
    rating: 4.3,
    reviews: "4,175",
    price: "₹12,000",
    oldPrice: "₹17,000",
    image:
      "https://birlalearnleap.com/media/cache/lg/af5102bc12187f2ef1056a01e79f85912785040c.jpg",
    route: "/burlington-english",
  },
];

export default function CourseSection() {
  const navigate = useNavigate();

  const handleCourseClick = (route) => {
    navigate(route);
  };

  const handleAddToCart = (course) => {
    console.log(`Added to cart: ${course.id}`);
    // Here, you can integrate cart functionality (e.g., Redux, Context API, or Local Storage)
  };

  return (
    <>
      <div className="course-section">
        <h2 className="outlined-text">All the skills you need in one place</h2>
        <p className="subheading">
          Empowering Your Growth From Essential Skills to Cutting-Edge
          Expertise!
        </p>
      </div>
      {/* Course Cards */}
      <div className="course-cards-section">
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
                onClick={() => handleCourseClick(course.route)}
              />
              <div className="course-details">
                <p className="course-title">{course.title}</p>
                <p className="instructor">{course.instructor}</p>
                <p className="rating">
                  ⭐⭐⭐⭐ {course.rating} ({course.reviews} reviews)
                </p>
              </div>
              <div className="course-footer">
                <p className="price">
                  <span className="current-price">{course.price}*</span>
                  <span className="old-price">{course.oldPrice}*</span>
                </p>
                <button
                  className="course-to-cart"
                  onClick={() => handleAddToCart(course)}
                >
                  <FaShoppingCart className="cart-icon" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
