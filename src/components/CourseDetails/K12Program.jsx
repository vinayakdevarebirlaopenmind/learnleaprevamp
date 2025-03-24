import {
  StarPurple500Sharp as StarIcon,
  StarHalfSharp as HalfStarIcon,
  CalendarMonth,
  Language,
  AccessAlarms as AlarmIcon,
  OndemandVideoSharp as VideoIcon,
  NoteAddSharp as ArticleIcon,
  SystemUpdateAltTwoTone as DownloadIcon,
  PhoneAndroidTwoTone as MobileIcon,
  EmojiEventsTwoTone as CertificateIcon,
} from "@mui/icons-material";
import { FaClock } from "react-icons/fa";
import Header from "../header";
import CustomizedBreadcrumbs from "../BreadCrumb/BreadCrumb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MuiAlert from "@mui/material/Alert";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  VideoLibrary,
  Article,
  CloudDownload,
  Tv,
  WorkspacePremium,
} from "@mui/icons-material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseTestimonial from "../Testimonial/CourseTestimonial";
import {
  certificateProgramEcced,
  diplomaeccedmodules,
  k12ProgramModule,
  leaderShipmodules,
  modules,
} from "../../constants/constants";
import CourseCertificate from "./CourseCertificate";
import TeamMembers from "./TeamMembers";
import CourseList from "./MiniCourseCard";
import Groups3Icon from "@mui/icons-material/Groups3";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../Alerts/SuccesAlert";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../slice/wishlistSlice";
import { useLocation, useNavigate } from "react-router-dom";
export const K12Program = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const location = useLocation();
  const course = location.state?.course;
  console.log(course);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
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
      setSuccessMessage(`${selectedCourse.title} added again successfully!`);
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
    <div>
      <Header />
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
      <div className="course-container">
        <div className="course-header">
          <div className="breadcrumb">
            <CustomizedBreadcrumbs />
          </div>

          <h1 className="course-title">
            Certification in K12 Teacher Training
          </h1>
          <p className="course-subtitle">
            Transforming Educators into Visionary Leaders for the Future of
            Learning
          </p>

          <div className="course-badge">Bestseller</div>

          <div className="course-rating">
            <span className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <HalfStarIcon />
            </span>
            <span className="ratings">(17,379 ratings)</span>
            <span className="students">185,449 students</span>
          </div>

          <div className="course-instructors">
            <span>Created by: Satwant Palekar, Priya Gopal</span>
          </div>

          <div className="course-info">
            <span className="icon">
              <CalendarMonth /> Duration: 2 months - 4 hours weekly
            </span>
            <span className="icon">
              <FaClock /> Total hours: 32 hours
            </span>
            <span className="icon">
              <Language /> English
            </span>
          </div>
        </div>
      </div>

      <div className="MiddleMainDiv">
        <div className="MiddleContent">
          <h2 className="course-learnings-h2">What you'll learn</h2>
          <div className="learnings-list">
            <ul>
              <li>
                Ensure joyful learning at all levels through learner centric
                approach.
              </li>
              <li>
                Creating a detailed pedagogical plan and strategies for
                effective classroom management.
              </li>
              <li>
                Apply technology explore digital tools and differentiated
                learning techniques in classroom practices.
              </li>
            </ul>
            <ul>
              <li>
                Analyze and act upon the assessment data of students for a
                remedial plan and interventions in teaching.
              </li>
              <li>
                Hone relationship management skills with parents and peers.
              </li>
              <li>
                Understand and apply effective communication techniques with
                students, parents and colleagues to enhance collaboration and
                engagement.
              </li>
            </ul>
          </div>
        </div>
        <div className="course-features">
          <h2 className="course-learnings-h2">This course includes:</h2>
          <div className="course-feature-list">
            <ul>
              <li>
                <VideoLibrary style={{ color: "blue" }} />
                32 hours on-demand video
              </li>
              <li>
                <Article style={{ color: "blue" }} /> 5 articles
              </li>
              <li>
                <CloudDownload style={{ color: "blue" }} /> 5 downloadable
                resources
              </li>
            </ul>
            <ul>
              <li>
                <Tv style={{ color: "blue" }} /> Access on mobile and Desktop
              </li>
              <li>
                <WorkspacePremium style={{ color: "blue" }} /> Certificate of
                completion
              </li>
            </ul>
          </div>
        </div>
        <div className="course-features">
          <h2 className="course-learnings-h2">Course Modules</h2>
          {k12ProgramModule.map((module, index) => (
            <Accordion
              key={index}
              sx={{
                border: "1px solid #000",
                borderRadius: "8px",
                boxShadow: "none",
                marginTop: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography component="span">{module.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{module.details}</AccordionDetails>
            </Accordion>
          ))}
        </div>
        {/* <div className="program-testimonials">
                <TeamMembers />
              </div> */}

        <div className="learnleap-certificate-section">
          <CourseCertificate />
          <h2 className="course-mobile-text">Earn a Recognized Certificate!</h2>
          <p className="course-mobile-text-paragraph">
            You will receive the certificate after successfully completing the
            course.
          </p>
        </div>
        {/* <div className="program-testimonials">
                <CourseTestimonial />
              </div> */}
        {/* <div className="program-testimonials">
                <CourseList />
              </div> */}
        {/* <ModernFooter/> */}
      </div>
      <div className="course-sidebar">
        <div className="sidebar-content">
          <div className="preview-video">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/vTNdFlXBon0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="course-price">
            <h1 className="current-price-details">₹10,000</h1>
            <span className="original-price">₹25,499</span>
            <span className="discount"> 60.78% off</span>
          </div>
          <div className="limited-offer">
            <AlarmIcon />
            <span>Few hours</span> left at this price!
          </div>
          <div className="limited-offer">
            <Groups3Icon />
            <span>Batch size</span>10
          </div>
          <div className="course-section-grp-button">
            <button
              className="cart-btn"
              onClick={() => handleAddToCart(course)}
            >
              Add to cart
            </button>
            <Tooltip title="Add to Wishlist" placement="top" followCursor>
              <span>
                <button
                  className="wishlist-btn"
                  onClick={() => handleWishlistToggle(course)}
                >
                  <FavoriteIcon />
                </button>
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
