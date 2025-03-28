import "./Footer.css";
import Learnleaplogo from "../../assets/image/LearnLeap Final Logo.png";
import React from "react";
import { Container, Grid, Typography, Link, Grid2 } from "@mui/material";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { trendingSearchesWithCourses } from "../../constants/constants";

const ModernFooter = () => {
  const navigate = useNavigate();

  const navigationLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "About LearnLeap", path: "/aboutus" },
      { name: "Purchase History", path: "/purchase-history" },
      { name: "Apply as Instructor", path: "/applyasintructor" },
      { name: "My Cart", path: "/cart" },
    ],

    Support: [
      { name: "Enquire Now", path: "/enquireform" },
      { name: "FAQs", path: "/faqs" },
      { name: "Privacy Policy", path: "/privacypolicy" },
      { name: "Refund Policy", path: "/refundpolicy" },
    ],
  };

  return (
    <div className="footer-wrapper">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* 1️⃣ Company Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <div className="business-card">
              <div className="logo-wrapper">
                <img src={Learnleaplogo} alt="Company Logo" />
              </div>
              <Typography variant="body2" color="black">
                Bridging Knowledge, Building Careers
              </Typography>
              <div className="social-icon-class">
                <a
                  target="_blank"
                  href="https://www.facebook.com/BirlaOpenMind/"
                  className="social-icon"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/birla-learnleap/"
                  className="social-icon"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/birlalearnleap/"
                  className="social-icon"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </Grid>

          {/* 2️⃣ Navigation Sections (Quick Links, Courses, Support) */}
          {Object.entries(navigationLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <div className="link-column">
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  {category}
                </Typography>
                {links.map(({ name, path }) => (
                  <Typography variant="body2" key={name}>
                    <Link
                      component="button"
                      onClick={() => navigate(path)}
                      className="footer-link"
                      sx={{ textAlign: "start" }}
                    >
                      {name}
                    </Link>
                  </Typography>
                ))}
              </div>
            </Grid>
          ))}
          {trendingSearchesWithCourses.length > 0 && (
            <Grid item xs={12} sm={6} md={3}>
              <div className="link-column">
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  Courses We Offer
                </Typography>
                {trendingSearchesWithCourses.map((item) => (
                  <Typography variant="body2" key={item.id}>
                    <Link
                      component="button"
                      onClick={() =>
                        navigate(item.path, { state: { course: item.course } })
                      }
                      className="footer-link"
                      sx={{ textAlign: "start" }}
                    >
                      {item.name}
                    </Link>
                  </Typography>
                ))}
              </div>
            </Grid>
          )}
          {/* 3️⃣ Footer Bottom */}
          <Grid item xs={12}>
            <Typography variant="body2" className="footer-text" align="center">
              © {new Date().getFullYear()} Birla LearnLeap. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ModernFooter;
