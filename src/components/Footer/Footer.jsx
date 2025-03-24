import "./Footer.css";
import Learnleaplogo from "../../assets/image/LearnLeap Final Logo.png";
import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const ModernFooter = () => {
  const navigationLinks = {
    "Quick Links": [
      "Home",
      "About LearnLeap",
      "Purchase History",
      "Apply as Instructor",
    ],
    Courses: [
      "Certificate Program for ECCEd",
      "Diploma Program for ECCEd",
      "Certificate Program for K12 Teachers",
      "Certificate Program for Leadership in Education",
      "Burlington English Program",
    ],
    Support: ["Enquire Now", "FAQs", "Privacy Policy", "Refund Policy"],
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
                {links.map((link) => (
                  <Typography variant="body2" key={link}>
                    <Link href="#" className="footer-link">
                      {link}
                    </Link>
                  </Typography>
                ))}
              </div>
            </Grid>
          ))}

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
