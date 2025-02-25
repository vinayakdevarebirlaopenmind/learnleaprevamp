import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./CourseSection.css";
import { courses } from "../../constants/constants";
import { addToCart } from "../../store/cartSlice";
import SuccessAlert from "../Alerts/SuccesAlert"; // Import the SuccessAlert component

export default function CourseSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCourseClick = (route) => {
    navigate(route);
  };

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));

    // Show success alert with dynamic message
    setSuccessMessage(`${course.title} added to cart successfully!`);
    setShowSuccess(true);
  };

  return (
    <>
      {/* Success Alert Component */}
      <SuccessAlert
        open={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)}
      />

      <div className="course-section">
        <h2 className="outlined-text">All the skills you need in one place</h2>
        <p className="subheading">
          Empowering Your Growth From Essential Skills to Cutting-Edge
          Expertise!
        </p>
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
        </div>{" "}
      </div>
    </>
  );
}
