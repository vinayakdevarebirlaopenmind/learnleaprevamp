import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Learnleaplogo from "../assets/image/LearnLeap Final Logo.png";
import { useNavigate } from "react-router-dom";
import "./css/Modal.css";
import { EnquiryModal } from "./Modal/EnquiryModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
const Header = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    localStorage.removeItem("accessToken"); // Remove token from storage
    navigate("/login"); // Redirect to login
  };
  // Get user info from Redux state
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // Add this state variable
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 24,
    seconds: 12,
  });

  // Timer useEffect (no changes needed)
  useEffect(() => {
    if (showNotification && !isClosing) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          let { hours, minutes, seconds } = prev;
          if (seconds === 0) {
            if (minutes === 0) {
              if (hours === 0) {
                clearInterval(timer);
                return { hours: 0, minutes: 0, seconds: 0 };
              }
              hours--;
              minutes = 59;
            } else {
              minutes--;
            }
            seconds = 59;
          } else {
            seconds--;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showNotification, isClosing]);

  const trendingSearches = [
    "Certificate Program for ECCEd",
    "Diploma Program for ECCEd",
    "Certificate Program for K12 Teachers",
    "Certificate Program for Leadership in Education",
    "Burlington English Program",
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 500);
  };
  // Add this useEffect hook for the typewriter effect
  useEffect(() => {
    const fullText = "What do you want to learn? ";
    let timer;

    if (isTyping) {
      timer = setTimeout(() => {
        setPlaceholderText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === fullText.length) {
          setIsTyping(false);
          setTimeout(() => {
            setCharIndex(0);
            setPlaceholderText("");
            setIsTyping(true);
          }, 1000); // Wait 2 seconds before restarting
        }
      }, 100); // Typing speed (milliseconds per character)
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping]);

  const handleFocus = () => {
    setShowDropdown(true);
    document.body.classList.add("blurred-background"); // Apply blur effect
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
      document.body.classList.remove("blurred-background"); // Remove blur effect
    }, 200);
  };

  return (
    <>
      <div className="container">
        {showNotification && (
          <div className={`header-notification ${isClosing ? "closing" : ""}`}>
            <span>
              New to LearnLeap? Shop now to get a limited time offer: courses
              from ₹10,000. Or, check out our courses. Offer Ends in{" "}
              <span className="timer">
                {String(timeLeft.hours).padStart(2, "0")}h{" "}
                {String(timeLeft.minutes).padStart(2, "0")}m{" "}
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </span>
            <button className="notification-close" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
        <header className="main-header">
          <div className="logo">
            <img
              className="logo"
              src={Learnleaplogo}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>

          <div className="main-dropdown-container">
            {isOpen && (
              <div className="dropdown-blur" onClick={() => setIsOpen(false)} />
            )}

            <button
              className="dropdown-button"
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            >
              Explore <FaChevronDown />
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                <h4>Links #</h4>
                <ul>
                  <li>About Learnleap</li>
                  <li>Events</li>
                  <li>Enquire Now</li>
                  <li>FAQs</li>
                </ul>

                <h4>Courses we offer</h4>
                <ul>
                  <li>Certificate Program for ECCEd</li>
                  <li>Diploma Program for ECCEd</li>
                  <li>Certificate Program for K12 Teachers</li>
                  <li>Certificate Program for Leadership in Education</li>
                  <li>Burlington English Program</li>
                </ul>
              </div>
            )}
          </div>

          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder={placeholderText}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {showDropdown && (
              <div className="dropdown-container">
                <h4 className="dropdown-title">Trending searches</h4>
                <div className="trending-list">
                  {trendingSearches.map((item, index) => (
                    <div key={index} className="trending-item">
                      <FontAwesomeIcon
                        icon={faArrowTrendUp}
                        className="trend-icon"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="auth-buttons">
            <button
              className="language-btn"
              onClick={() => setShowEnquiryModal(true)}
            >
              Join now
            </button>{" "}
            {!isAuthenticated ? (
              <>
                <button
                  className="auth-btn sign-up"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
                <button
                  className="auth-btn login"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </>
            ) : (
              <div className="profile-dropdown">
                <button className="profile-btn">
                  <img src={user.image} alt="Profile" className="profile-img" />
                  {user.name}
                </button>
                <div className="dropdown-content">
                  <button onClick={() => navigate("/profile")}>Profile</button>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </header>
      </div>

      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
      />
    </>
  );
};

export default Header;
