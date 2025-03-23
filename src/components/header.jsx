import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa"; // Import dropdown icon
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Learnleaplogo from "../assets/image/LearnLeap Final Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/Modal.css";
import { EnquiryModal } from "./Modal/EnquiryModal";
import { useSelector } from "react-redux";
import { menuItems, trendingSearches } from "../constants/constants";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import ProfileDropdown from "./UserProfile/ProfileDropdown";
import Person4Icon from "@mui/icons-material/Person4";

const Header = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(() => {
    return sessionStorage.getItem("activeButton") || null;
  });
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredSearches, setFilteredSearches] = useState(trendingSearches);
  const combinedSearches = [...menuItems, ...trendingSearches];
  const inputRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 24,
    seconds: 12,
  });

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

  const handleInputFocus = () => {
    setShowDropdown(true);
    document.body.classList.add("blurred-background"); // Apply blur effect if needed
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
      document.body.classList.remove("blurred-background");
    }, 200);
  };

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      setFilteredSearches(
        trendingSearches.filter((item) =>
          item.name.toLowerCase().includes(query)
        )
      );
    } else {
      setFilteredSearches(trendingSearches); // Show all when input is empty
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && filteredResults.length > 0) {
      navigate(filteredResults[0].path); // Navigate to the first matching result
      setSearchQuery(""); // Clear input
      setShowDropdown(false); // Close dropdown
    }
  };

  const handleSearchClick = (path) => {
    setSearchQuery(name);
    setShowDropdown(false); // Close dropdown
    document.body.classList.remove("blurred-background"); // Remove blur effect
    navigate(path); // Navigate to the selected search
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [cartItems]);

  useEffect(() => {
    if (location.pathname === "/signup") {
      setActiveButton("signup");
    } else if (location.pathname === "/login") {
      setActiveButton("login");
    }
  }, [location.pathname]);

  const handleClick = (buttonType, path) => {
    setActiveButton(buttonType);
    sessionStorage.setItem("activeButton", buttonType); // Store state in sessionStorage
    navigate(path);
  };
  const handleClickJoinNow = () => {
    setIsActive(true);
    setShowEnquiryModal(true);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };
  const isMobile = useMediaQuery("(max-width:1124px)");

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
              <div
                className="dropdown-menu"
                onMouseDown={(e) => e.preventDefault()}
              >
                <h4>Links #</h4>
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavigation(item.path)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

                <h4>Courses we offer</h4>
                <ul>
                  {trendingSearches.map((item, index) => (
                    <li key={index} onClick={() => handleNavigation(item.path)}>
                      {item.name}
                    </li>
                  ))}
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
                value={searchQuery}
                onFocus={handleInputFocus} // Open dropdown when input is clicked
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange} // Keeps dropdown open when typing
              />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {showDropdown && (
              <div
                className="dropdown-container"
                onMouseDown={(e) => e.preventDefault()} // Prevent closing on modal click
              >
                <h4 className="dropdown-title">Trending searches</h4>
                <div className="trending-list">
                  {filteredSearches.map((item, index) => (
                    <div
                      key={index}
                      className="trending-item"
                      onClick={() => handleSearchClick(item.path)} // Close dropdown on selection
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={faArrowTrendUp}
                        className="trend-icon"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="auth-buttons">
            <div
              className="cart-icon-container"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart className={`cart-icon ${shake ? "shake" : ""}`} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
            <button
              className={`joinnow-btn ${isActive ? "active" : ""}`}
              onClick={handleClickJoinNow}
            >
              Ask me
            </button>
            {!isAuthenticated ? (
              <>
                <button
                  className={`auth-btn sign-up ${
                    activeButton === "signup" ? "active" : ""
                  }`}
                  onClick={() => handleClick("signup", "/signup")}
                >
                  Sign Up
                </button>

                <button
                  className={`auth-btn login ${
                    activeButton === "login" ? "active" : ""
                  }`}
                  onClick={() => handleClick("login", "/login")}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                {user?.name && (
                  <Box sx={{ flexGrow: 0 }}>
                    <ProfileDropdown />
                  </Box>
                )}
              </>
            )}
          </div>
          {isMobile && (
            <MenuIcon
              className="hamburger-drawer"
              sx={{cursor:'pointer'}}
              onClick={toggleDrawer(true)}
            />
          )}
        </header>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={400} /* Smooth opening */
          PaperProps={{
            sx: { width: "100vw", backgroundColor: "white" },
          }} /* Full width */
        >
          <div
            className="full-page-drawer"
            role="presentation"
            onKeyDown={toggleDrawer(false)}
          >
            <button className="drawer-close" onClick={toggleDrawer(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="logo">
              <img
                className="logo"
                src={Learnleaplogo}
                alt=""
                onClick={() => navigate("/")}
              />
            </div>

            <h4 className="links-h4">Links #</h4>
            <ul className="drawer-menu">
              {menuItems.map((item, index) => (
                <li key={index} onClick={() => navigate(item.path)}>
                  {item.name}
                </li>
              ))}
            </ul>

            <h4 className="links-h4">Courses we offer</h4>
            <ul className="drawer-menu">
              {trendingSearches.map((item, index) => (
                <li key={index} onClick={() => handleNavigation(item.path)}>
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="drawer-footer">
              {!isAuthenticated ? (
                <>
                  <button
                    className="mobile-sign-up"
                    onClick={() => handleClick("signup", "/signup")}
                  >
                    Sign Up
                  </button>

                  <button
                    className="login"
                    onClick={() => handleClick("login", "/login")}
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  {user?.name && (
                    <div className="user-section">
                      <Person4Icon />
                      <span className="user-name">{user.name}'s profile</span>
                      {/* <span className="user-name"></span> */}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Drawer>
      </div>

      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
      />
    </>
  );
};

export default Header;
