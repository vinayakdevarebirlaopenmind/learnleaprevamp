import { useState, useCallback } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaInfoCircle,
} from "react-icons/fa";
import "./CourseCard.css"; // Import custom CSS

const CourseCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWishlist = useCallback(() => {
    setIsWishlisted((prev) => !prev);
  }, []);

  const courseData = {
    id: 1,
    title:
      "Advanced React Development with Modern Practices and Performance Optimization",
    subtitle: "Master React 18 with Real-world Projects",
    author: "Sarah Johnson",
    currentPrice: 49.99,
    oldPrice: 199.99,
    discount: 75,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    isNew: true,
    isPopular: true,
  };

  return (
    <div className="course-card">
      <div className="image-container">
        <img
          src={courseData.image}
          alt={courseData.title}
          className="course-image"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2";
          }}
          loading="lazy"
        />
        {courseData.isNew && <div className="new-badge">New</div>}
      </div>

      <div className="course-content">
        <div
          className="title-container"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <h2 className="course-title">{courseData.title}</h2>
          {showTooltip && <div className="tooltip">{courseData.title}</div>}
        </div>

        <p className="course-subtitle">{courseData.subtitle}</p>
        <p className="course-author">by {courseData.author}</p>

        <div className="price-container">
          <span className="current-price">
            ${FormatIndianNumber(courseData.currentPrice)}
          </span>
          <span className="old-price">${courseData.oldPrice}</span>
          <span className="discount">{courseData.discount}% OFF</span>
        </div>

        <div className="button-container">
          <button className="add-to-cart">
            <FaShoppingCart className="icon" />
            Add to Cart
          </button>

          <button className="info-button">
            <FaInfoCircle className="icon" />
          </button>

          <button className="wishlist-button" onClick={handleWishlist}>
            {isWishlisted ? (
              <FaHeart className="heart-icon" />
            ) : (
              <FaRegHeart className="icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
