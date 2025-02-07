import "./CourseDetails.css";

const course = {
  title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
  description:
    "Become a Pro Copywriter with the Complete Copywriting and Content Marketing Course. Use ChatGPT. Get 70+ Pro Templates.",
  instructor: "Ing. Tomas Moravek, Learn Digital Advertising",
  lastUpdated: "1/2025",
  language: ["English", "Indonesian"],
  rating: 4.4,
  reviews: "1,732 ratings",
  students: "121,984 learners",
  price: "₹499",
  oldPrice: "₹3,099",
  discount: "84% off",
  timeLeft: "5 hours left at this price!",
  image:
    "https://birlalearnleap.com/media/cache/lg/26d796cb7beb9d6a953afc096d5501a689813933.jpg", // Replace with actual path
};

export const CourseDetails = () => {
  return (
    <div className="course-container">
      {/* Left Section */}
      <div className="course-info">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>
        <p className="course-instructor">
          Created by <span>{course.instructor}</span>
        </p>
        <p className="course-meta">
          Last updated {course.lastUpdated} • {course.language.join(", ")}
        </p>
        <div className="course-rating">
          ⭐ {course.rating} <span className="reviews">({course.reviews})</span>{" "}
          • {course.students}
        </div>

        <div className="course-learnings">
          <h2>What you'll learn</h2>
          <ul>
            <li>✔ Course Fully Updated with 50+ writing assignments.</li>
            <li>✔ Advanced Copywriting Skills & Persuasive Techniques.</li>
            <li>✔ Master ChatGPT for Content & SEO Optimization.</li>
            <li>✔ Effective Influencer Outreach & Business Promotion.</li>
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="course-sidebar">
        <img src={course.image} alt="Course Preview" className="course-image" />
        <div className="course-price">
          <span className="current-price">{course.price}</span>
          <span className="old-price">{course.oldPrice}</span>
          <span className="discount">{course.discount}</span>
        </div>
        <p className="time-left">⏳ {course.timeLeft}</p>
        <button className="add-to-cart">Add to cart</button>
        <p className="guarantee">30-Day Money-Back Guarantee</p>
        <button className="gift-course">Gift this course</button>
        <button className="apply-coupon">Apply Coupon</button>
      </div>
    </div>
  );
};

// export default CourseDetails;
