import React from "react";
import "./CourseDetails.css";

const CourseDetails = () => {
  return (
    <div className="course-container">
      {/* Left Section */}
      <div className="course-details">
        <h1>Sales and Persuasion Skills for Startups</h1>
        <p className="subtitle">
          The entrepreneur’s sure guide to getting a ‘Yes’
        </p>
        <span className="bestseller">Bestseller</span>
        <p className="created-by">
          Created by <a href="#">Len Smith</a>, <a href="#">Sean Kaye</a>
        </p>
        <p className="course-meta">
          Last updated 4/2018 • English [Auto], French [Auto], 6 more
        </p>
        <div className="ratings">
          <span>⭐ 4.4 </span> <span>(1193 ratings)</span> • 10,313 learners
        </div>
        <div className="premium-info">
          <span className="premium-tag">Premium</span>
          <p>
            Access this top-rated course, plus 12,000+ more top-rated courses,
            with a Udemy plan. <a href="#">See Plans & Pricing</a>
          </p>
        </div>
        <div className="course-learn">
          <h3>What you'll learn</h3>
          <ul>
            <li>How to structure a sales call – with you in control</li>
            <li>Closing techniques – getting to a ‘yes’</li>
            <li>Powerful questioning techniques</li>
            <li>Selling ‘off the page’ – a proven way to generate high quality leads</li>
            <li>Recovering from a lost sale</li>
          </ul>
        </div>
        <div className="related-topics">
          <h3>Explore related topics</h3>
          <button>Sales Skills</button>
          <button>Persuasion</button>
          <button>Sales</button>
          <button>Business</button>
        </div>
        <div className="course-includes">
          <h3>This course includes:</h3>
          <ul>
            <li>📺 1.5 hours on-demand video</li>
            <li>📄 1 article</li>
            <li>📥 2 downloadable resources</li>
            <li>📱 Access on mobile and TV</li>
            <li>🏆 Certificate of completion</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="course-sidebar">
        <div className="video-preview">
          <button className="play-button">▶ Preview this course</button>
        </div>
        <div className="pricing">
          <h2>₹3,099</h2>
          <button className="cart-btn">Add to cart</button>
          <button className="buy-btn">Buy now</button>
          <p className="guarantee">30-Day Money-Back Guarantee</p>
        </div>
        <div className="coupon-section">
          <input type="text" placeholder="Enter Coupon" />
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
