import "./Footer.css";
import Learnleaplogo from "../../assets/image/LearnLeap Final Logo.png";
import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const ModernFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = {
    Company: ["About Us", "Careers", "Press", "Blog"],
    Products: ["Features", "Pricing", "Solutions", "Enterprise"],
    Support: ["Help Center", "Documentation", "API Status", "Contact"],
    Resources: ["Partners", "Community", "Developers", "Legal"],
  };

  return (
    <div className="footer-wrapper">
      <Container maxWidth="lg">
     

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <div className="business-card">
              <div className="logo-wrapper">
                <img src={Learnleaplogo} alt="Company Logo" />
              </div>
              <Typography variant="body2" color="black">
              Bridging Knowledge,
              Building Careers
              </Typography>
            </div>
          </Grid>

          {Object.entries(navigationLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
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

          <Grid item xs={12}>
            <div className="footer-text">
              <a target="_blank" href="https://www.facebook.com/BirlaOpenMind/" className="social-icon">
                <FaFacebook size={24} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/birla-learnleap/" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a target="_blank" href="https://www.instagram.com/birlalearnleap/" className="social-icon">
                <FaInstagram size={24} />
              </a>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" className="footer-text">
              © {new Date().getFullYear()} Birla LearnLeap. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ModernFooter;
