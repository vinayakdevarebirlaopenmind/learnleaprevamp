import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import "./CourseTestimonial.css"; // Import custom CSS

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
    name: "James Lee",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    feedback:
      "This product has helped streamline our processes significantly. Highly recommend!",
    date: "2024-01-05",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Martinez",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    feedback:
      "Amazing customer support and an intuitive platform. A game-changer for our business.",
    date: "2024-01-02",
    rating: 4,
  },
];

const CourseTestimonial = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const handleShowMore = () => {
    setVisibleTestimonials((prev) => (prev === 3 ? testimonials.length : 3));
  };

  return (
    <Container maxWidth="lg" className="testimonial-container">
      <Typography align="start" variant="h6" fontWeight={"bold"}>
        Student Testimonials
      </Typography>
      <Typography className="testimonial-subheading" align="start">
        See what our customers are saying about us
      </Typography>

      <Grid container spacing={4} className="testimonial-grid">
        {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card className="testimonial-card">
              <CardContent>
                <Box className="testimonial-header">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly size="small" />
                  </Box>
                </Box>
                <Typography variant="body1" className="testimonial-feedback">
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="show-more-container">
        <button className="show-more-testimonials" onClick={handleShowMore}>
          {visibleTestimonials === 3 ? "Show More" : "Show Less"}
        </button>
      </Box>
    </Container>
  );
};

export default CourseTestimonial;
