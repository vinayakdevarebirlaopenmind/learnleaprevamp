import React from "react";
import { testimonials } from "../../constants/constants";
import "./TestimonialList.css";
const TestimonialList = () => {
  return (
    <>
      <div className="testimonialheading-contianer">
        <h2 className="outlined-text">Testimonial</h2>
        <p className="subheading">
        <p className="subheading">
        Empowering learners with expert-led courses hear from those who transformed their careers with us!
        </p>
        </p>      </div>

      <div className="testimonial-main-page">
        <div className="testimonial-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              {/* PROFILE INFO */}
              <div className="profile-info">
                <img src={testimonial.image} alt={`${testimonial.name} pfp`} />
                <div className="profile-text">
                  <h2 className="name">{testimonial.name}</h2>
                  <p>{testimonial.status}</p>
                </div>
              </div>

              {/* TESTIMONIAL */}
              <div className="testimonial-text">
                <h3>{testimonial.title}</h3>
                <p>“ {testimonial.description} ”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialList;
