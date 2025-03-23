import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import "./CourseCertificate.css"; // Import CSS styles
import LearnleapCertificate from "../../assets/image/learnleapcertificate.jpg";

const CourseCertificate = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      className="section-container"
      direction={isMobile ? "column-reverse" : "row"} // Change layout on mobile
    >
      {/* Text Section */}
      <Grid item xs={12} md={6} className="text-container">
        <h2 className="course-certificate-heading">Earn a Recognized Certificate!</h2>
        <Typography component="span" className="certificate-subheading"> 
          You will receive the certificate after successfully completing the
          course.
        </Typography>
       
      </Grid>

      {/* Image Section */}
      <Grid item xs={12} md={6} className="image-container">
        <img
          src={LearnleapCertificate}
          alt="Education Illustration"
          className="responsive-image"
        />
      </Grid>
    </Grid>
  );
};

export default CourseCertificate;
