import "./Footer.css";
import { FcAssistant } from "react-icons/fc";
import Learnleaplogo from "../../assets/image/LearnLeap Final Logo.png";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const FooterWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to left top, #1a237e, #3949ab)",
  color: "#ffffff",
  padding: "4rem 0 2rem 0",
  position: "relative",
}));

const LogoWrapper = styled(Box)({
  marginBottom: "2rem",
  "& img": {
    height: "80px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const LinkColumn = styled(Box)({
  "& .MuiTypography-root": {
    marginBottom: "0.5rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#90caf9",
    },
  },
});

const SocialIcon = styled(IconButton)({
  color: "#ffffff",
  margin: "0 8px",
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    color: "#90caf9",
  },
});

const ScrollTopButton = styled(IconButton)({
  position: "absolute",
  right: "2rem",
  top: "-1.5rem",
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#e3f2fd",
  },
});

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
    <FooterWrapper>
      <Container maxWidth="lg">
        <ScrollTopButton onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </ScrollTopButton>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <LogoWrapper>
              <img
                src={Learnleaplogo}
                alt="Company Logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = { Learnleaplogo };
                }}
              />
            </LogoWrapper>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">
                Creating innovative solutions for tomorrow's challenges.
              </Typography>
            </Box>
          </Grid>

          {Object.entries(navigationLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <LinkColumn>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  {category}
                </Typography>
                {links.map((link) => (
                  <Typography variant="body2" key={link}>
                    <Link href="#" underline="none" color="inherit">
                      {link}
                    </Link>
                  </Typography>
                ))}
              </LinkColumn>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <SocialIcon aria-label="Facebook" component="a" href="#">
                <FaFacebook size={24} />
              </SocialIcon>
              <SocialIcon aria-label="Twitter" component="a" href="#">
                <FaTwitter size={24} />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn" component="a" href="#">
                <FaLinkedin size={24} />
              </SocialIcon>
              <SocialIcon aria-label="Instagram" component="a" href="#">
                <FaInstagram size={24} />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, opacity: 0.7 }}
            >
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default ModernFooter;
