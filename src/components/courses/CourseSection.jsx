import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./CourseSection.css";
import { courses, FormatIndianNumber } from "../../constants/constants";
import { addToCart } from "../../store/cartSlice";
import SuccessAlert from "../Alerts/SuccesAlert"; // Import the SuccessAlert component
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Tooltip } from "@mui/material";
// import CourseCard from "./CourseCard";

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

    setSuccessMessage(`${course.title} added to cart successfully!`);
    setShowSuccess(true);
  };

  const handleAddToWishlist = (course) => {
    // Here, dispatch the wishlist action when implemented
    setSuccessMessage(`${course.title} added to wishlist!`);
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
                  <p className="main-course-title">{course.title}</p>
                  <p className="instructor">{course.instructor}</p>
                  <p className="rating">
                    ⭐⭐⭐⭐ {course.rating} ({course.reviews} reviews)
                  </p>
                </div>
                <div className="course-footer">
                  <p className="price">
                    <span className="current-price">
                      {FormatIndianNumber(course.price)}*
                    </span>
                    <span className="old-price">
                      {FormatIndianNumber(course.oldPrice)}*
                    </span>
                  </p>
                </div>
                <div className="footer-buttons">
                  <Tooltip title="View Details" placement="top" followCursor>
                    <button
                      className="view-details"
                      onClick={() => handleCourseClick(course.route)}
                    >
                      <InfoIcon className="info-icon" />
                    </button>
                  </Tooltip>

                  {/* Add to Cart Button */}
                  <Tooltip
                    title="Add to Cart"
                    placement="top"
                    followCursor
                    sx={{
                      fontSize: "1.2rem", // Increase text size
                      "& .MuiTooltip-tooltip": {
                        fontSize: "1.2rem", // Make tooltip text larger
                        padding: "10px 15px", // Increase padding
                        backgroundColor: "black", // Custom color if needed
                      },
                    }}
                  >
                    <button
                      className="course-to-cart"
                      onClick={() => handleAddToCart(course)}
                    >
                      <FaShoppingCart className="cart-icon" />
                    </button>
                  </Tooltip>

                  {/* Add to Wishlist Button */}
                  <Tooltip title="Wishlist" placement="top" followCursor>
                    <button
                      className="add-to-wishlist"
                      onClick={() => handleAddToWishlist(course)}
                    >
                      <FavoriteIcon className="wishlist-icon" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
            {/* <CourseCard /> */}
          </div>
        </div>
      </div>
    </>
  );
}
