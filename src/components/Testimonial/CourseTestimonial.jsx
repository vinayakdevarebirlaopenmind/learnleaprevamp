import React, { useState } from "react";
import {
  Box,
  Grid,
  Avatar,
  Rating,
  Typography,
} from "@mui/material";
import "./CourseTestimonial.css"; // Updated CSS file name

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    feedback:
      "The product exceeded my expectations! The user interface is intuitive and the customer support team was incredibly helpful.",
    date: "2024-01-15",
    rating: 4,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    feedback:
      "This solution has transformed our business operations. The automation features have saved us countless hours of manual work.",
    date: "2024-01-10",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    feedback:
      "A great experience overall! The features are well-designed and easy to use.",
    date: "2024-01-08",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    feedback:
      "A great experience overall! The features are well-designed and easy to use.",
    date: "2024-01-08",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    feedback:
      "A great experience overall! The features are well-designed and easy to use.",
    date: "2024-01-08",
    rating: 5,
  }
];

const CourseTestimonialMini = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const handleShowMore = () => {
    setVisibleTestimonials((prev) =>
      prev === 3 ? testimonials.length : 3
    );
  };

  return (
    <div className="courses-testimonial-mini-container">
      <h2 className="courses-testimonial-mini-heading">
        Student Testimonials
      </h2>
      <Typography component="p" className="courses-testimonial-mini-subheading">
        See what our students are saying about us
      </Typography>
      <Grid container spacing={3} className="courses-testimonial-mini-grid">
        {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
          <Grid item key={testimonial.id}>
            <div className="courses-testimonial-mini-card">
              <div className="courses-testimonial-mini-header">
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="courses-testimonial-mini-avatar"
                />
                <div>
                  <h3 className="courses-testimonial-mini-name">
                    {testimonial.name}
                  </h3>
                  <p className="courses-testimonial-mini-date">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </p>
                  <Rating value={testimonial.rating} readOnly size="small" />
                </div>
              </div>
              <p className="courses-testimonial-mini-feedback">
                {testimonial.feedback}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
      <Box className="courses-testimonial-mini-show-more-container">
        <button
          className="courses-testimonial-mini-show-more-btn"
          onClick={handleShowMore}
        >
          {visibleTestimonials === 3 ? "Show More" : "Show Less"}
        </button>
      </Box>
    </div>
  );
};

export default CourseTestimonialMini;
