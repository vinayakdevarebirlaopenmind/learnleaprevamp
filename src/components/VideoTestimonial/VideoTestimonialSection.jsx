import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./VideoTestimonialSection.css";

const videotestimonials = [
  {
    id: 1,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla LearnLeap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
  },
  {
    id: 2,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Rahul Verma",
    profession: "Data Scientist @TechCorp",
    text: "I gained real-world experience through their practical assignments. It gave me the confidence to switch careers successfully.",
  },
  {
    id: 3,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Rahul Verma",
    profession: "Data Scientist @TechCorp",
    text: "I gained real-world experience through their practical assignments. It gave me the confidence to switch careers successfully.",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

const VideoTestimonialSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const truncateText = (text, id) => {
    const words = text.split(" ");
    if (words.length > 20 && expandedId !== id) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return text;
  };

  const handleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // ✅ Fix: Convert YouTube Shorts & Youtu.be links to Embed URL
  const openModal = (videoUrl) => {
    let embedUrl = videoUrl;

    if (videoUrl.includes("youtube.com/shorts/")) {
      embedUrl = videoUrl.replace("youtube.com/shorts/", "youtube.com/embed/");
    } else if (videoUrl.includes("youtu.be/")) {
      embedUrl = videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
    }

    setModalVideo(embedUrl);
    setAutoPlay(false);
  };

  const closeModal = () => {
    setModalVideo(null);
    setAutoPlay(true);
  };

  return (
    <div className="videotestimonial-container">
      <h6 className="common-heading">VIDEO TESTIMONIALS</h6>
      <h4 className="common-title">
        Hear from <span className="highlight">our graduates</span>
      </h4>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay={autoPlay}
        className="carousel"
        arrows
      >
        {videotestimonials.map((testimonial) => (
          <div key={testimonial.id} className="videotestimonial-card">
            <div
              className="video-thumbnail"
              style={{ backgroundImage: `url(${testimonial.thumbnailUrl})` }}
            >
              <button
                className="play-button"
                onClick={() => openModal(testimonial.videoUrl)}
              >
                Watch my story
              </button>
            </div>
            <div className="card-content">
              <p className="videotestimonial-text">
                {truncateText(testimonial.text, testimonial.id)}
                {testimonial.text.split(" ").length > 20 && (
                  <span
                    className="read-more"
                    onClick={() => handleReadMore(testimonial.id)}
                  >
                    {expandedId === testimonial.id
                      ? " Show Less"
                      : " Read More"}
                  </span>
                )}
              </p>
              <p className="videotestimonial-name">{testimonial.name}</p>
              <p className="videotestimonial-profession">
                {testimonial.profession}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* ✅ Fixed YouTube Shorts Embedding */}
      {modalVideo && (
        <div className="videomodal-overlay" onClick={closeModal}>
          <div
            className="videomodal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="videomodal-video"
              src={`${modalVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonialSection;
