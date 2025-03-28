import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../components/slice/wishlistSlice";
import { useNavigate } from "react-router-dom";
import "./WishlistPage.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../store/cartSlice";
import Header from "../header";
import CourseSection from "../courses/CourseSection";
import { FormatIndianNumber } from "../../constants/constants";
import { Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import WishlistImage from "../../assets/image/wishlist-image.jpg";
import ModernFooter from "../Footer/Footer";
const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const navigate = useNavigate();
  const handleCourseClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <Header />
      <div className="wishlist-container">
        {wishlistItems.length !== 0 ? (
          <h2 className="common-heading">
            You have {wishlistItems.length} courses in your Wishlist.
          </h2>
        ) : null}
        {wishlistItems.length === 0 ? (
          <>
            <h2 className="common-heading">
              Your wishlist <span className="color-effect"> is empty.</span>
            </h2>
            <div className="cart-image-section">
              <img src={WishlistImage} alt="CartImage" className="CartImage" />
            </div>
          </>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((course, index) => (
              <div key={course.id} className="course-card">
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
                      onClick={() => handleCourseClick(course.route)}
                    >
                      <InfoIcon className="info-icon" />
                    </button>
                  </Tooltip>
                  {/* Add to Cart Button */}
                  <Tooltip title="Add to Cart" placement="top" followCursor>
                    <button
                      className="course-to-cart"
                      onClick={() => dispatch(addToCart(course))}
                    >
                      <FaShoppingCart className="cart-icon" />
                    </button>
                  </Tooltip>
                  {/* Add to Wishlist Button */}
                  <Tooltip title="Remove" placement="top" followCursor>
                    <button
                      className="add-to-wishlist"
                      onClick={() => dispatch(removeFromWishlist(course.id))}
                    >
                      <FaTrash />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ModernFooter />
    </>
  );
};

export default WishlistPage;
