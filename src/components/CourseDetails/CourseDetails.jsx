import "./CourseDetails.css";
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
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
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
import { modules } from "../../constants/constants";
import CourseCertificate from "./CourseCertificate";
import CourseSection from "../courses/CourseSection";
import TeamMembers from "./TeamMembers";
import CourseList from "./MiniCourseCard";
import ModernFooter from "../Footer/Footer";
import Groups3Icon from "@mui/icons-material/Groups3";
export const CourseDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="course-container">
        <div className="course-header">
          <div className="breadcrumb">
            <CustomizedBreadcrumbs />
          </div>

          <h1 className="course-title">
            Certificate Program for Leadership in Education
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
            <span>Created by: Priya Gopal, Sandeep Pinto</span>
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
            <span className="original-price">₹13,499</span>
            <span className="discount">87% off</span>
          </div>
          <div className="limited-offer">
            <AlarmIcon />
            <span>5 hours</span> left at this price!
          </div>
          <div className="limited-offer">
            <Groups3Icon />
            <span>Batch size</span>10
          </div>
          <div className="course-section-grp-button">
            <button className="cart-btn">Add to cart</button>
            <Tooltip title="Add to Wishlist" placement="top" followCursor>
              <span>
                <button className="wishlist-btn">
                  <FavoriteIcon />
                </button>
              </span>
            </Tooltip>
          </div>
          <button className="cart-btn">Buy Now</button>
        </div>
      </div>

      <div className="MiddleMainDiv">
        <div className="MiddleContent">
          <h2 className="course-learnings-h2">What you'll learn</h2>
          <div className="learnings-list">
            <ul>
              <li>Detailed Understanding of Generative AI</li>
              <li>Industry use cases and ideas that can be implemented</li>
              <li>
                Future trends and how to stay relevant in post-GenAI world
              </li>
              <li>
                Key Concepts - LLM, Embeddings, Prompt Engineering, Fine Tuning
              </li>
              <li>Hands-on experience, creating a chatbot</li>
              <li>Roadmap for continuous learning</li>
            </ul>
            <ul>
              <li>Detailed Understanding of Generative AI</li>
              <li>Industry use cases and ideas that can be implemented</li>
              <li>
                Future trends and how to stay relevant in post-GenAI world
              </li>
              <li>
                Key Concepts - LLM, Embeddings, Prompt Engineering, Fine Tuning
              </li>
              <li>Hands-on experience, creating a chatbot</li>
              <li>Roadmap for continuous learning</li>
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
                <Article style={{ color: "blue" }} /> 3 articles
              </li>
              <li>
                <CloudDownload style={{ color: "blue" }} /> 4 downloadable
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
          {modules.map((module, index) => (
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
        <div className="program-testimonials">
          <TeamMembers />
        </div>

        <div className="learnleap-certificate-section">
          <CourseCertificate />
          <h2 className="course-mobile-text">Earn a Recognized Certificate!</h2>
          <p className="course-mobile-text-paragraph">
            You will receive the certificate after successfully completing the
            course.
          </p>
        </div>
        <div className="program-testimonials">
          <CourseTestimonial />
        </div>
        <div className="program-testimonials">
          <CourseList />
        </div>
        {/* <ModernFooter/> */}
      </div>
    </div>
  );
};
