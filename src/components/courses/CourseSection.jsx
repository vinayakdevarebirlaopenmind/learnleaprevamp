import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./CourseSection.css";
import { courses, FormatIndianNumber } from "../../constants/constants";
import { addToCart } from "../../store/cartSlice";
import SuccessAlert from "../Alerts/SuccesAlert"; // Import the SuccessAlert component
import MuiAlert from "@mui/material/Alert";
import { Snackbar, Tooltip, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWishlist, removeFromWishlist } from "../slice/wishlistSlice";

export default function CourseSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleCourseClick = (course) => {
    navigate(course.route, { state: { course } });
  };

  const handleAddToCart = (course) => {
    const existingItem = cartItems.find((item) => item.id === course.id);

    if (existingItem) {
      setErrorMessage(
        <>
          {course.title} is already in the cart. Do you want to add another?{" "}
          <span
            style={{
              color: "#1d8cdc",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/cart")}
          >
            View Cart
          </span>
        </>
      );
      setSelectedCourse(course); // Store course info for confirmation
      setShowError(true);
    } else {
      dispatch(addToCart(course));
      setSuccessMessage(
        <>
          {course.title} added to cart successfully!{" "}
          <span
            style={{
              color: "#1d8cdc",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/cart")}
          >
            View Cart
          </span>
        </>
      );
      setShowSuccess(true);
    }
  };

  const handleConfirmAddToCart = () => {
    if (selectedCourse) {
      dispatch(addToCart(selectedCourse));
      setSuccessMessage(
        <>
          {selectedCourse.title} added again successfully!{" "}
          <span
            style={{
              color: "#1d8cdc",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/cart")}
          >
            View Cart
          </span>
        </>
      );
      setShowSuccess(true);
      setShowError(false);
      setSelectedCourse(null); // Reset selection
    }
  };
  const handleWishlistToggle = (course) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (item) => item.id === course.id
    );

    if (isAlreadyInWishlist) {
      dispatch(removeFromWishlist(course.id));
      setSuccessMessage(`${course.title} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(course));
      setSuccessMessage(`${course.title} added to wishlist!`);
    }
    setShowSuccess(true);
  };
  return (
    <>
      {/* Success Alert */}
      <SuccessAlert
        open={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)}
      />

      {/* Confirmation Alert */}
      <Snackbar
        open={showError}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="outlined"
          severity="error"
          sx={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            fontWeight: "bold",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
          action={
            <>
              <Button
                color="error"
                size="small"
                onClick={() => setShowError(false)}
              >
                No
              </Button>
              <Button
                color="success"
                size="small"
                onClick={handleConfirmAddToCart}
              >
                Yes
              </Button>
            </>
          }
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>

      <div className="course-section">
        <h2 className="common-heading">All the skills you need in one place</h2>
        <p className="common-title">
          Our Courses with {""}
          <span className="color-effect">Cutting-edge expertise unleashed</span>
        </p>
        <div className="course-cards-section">
          <div className="course-list">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                  onClick={() => handleCourseClick(course)} // Pass course object on click
                />
                <div className="course-details">
                  <p className="main-course-title">{course.title}</p>
                  {/* <p className="instructor">{course.instructor}</p> */}
                  <p className="rating">
                    ⭐⭐⭐⭐ {course.rating} ({course.reviews} reviews)
                  </p>
                </div>
                <div className="course-footer">
                  <p className="price">
                    <span className="current-price">
                      ₹{FormatIndianNumber(course.price)}*
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
                      onClick={() => handleCourseClick(course)} // Pass course object on click
                    >
                      <InfoIcon className="info-icon" />
                    </button>
                  </Tooltip>
                  {/* Add to Cart Button */}
                  <Tooltip title="Add to Cart" placement="top" followCursor>
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
                      onClick={() => handleWishlistToggle(course)}
                    >
                      <FavoriteIcon
                        className={`wishlist-icon ${
                          wishlistItems.some((item) => item.id === course.id)
                            ? "active"
                            : ""
                        }`}
                      />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
