import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./VideoTestimonialSection.css";

const videotestimonials = [
  {
    id: 1,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla Learn Leap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
  },
  {
    id: 2,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla Learn Leap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
  },
  {
    id: 3,
    videoUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    thumbnailUrl: "https://youtube.com/shorts/_sXPKF8u64Y?si=cahaAfjI2Yz_3xTr",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla Learn Leap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
  },
  {
    id: 4,
    videoUrl: "https://youtu.be/UiaWl3nVjZo?si=0aZq0k6XkmJo6NOs",
    thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla Learn Leap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
  },
  {
    id: 5,
    videoUrl: "https://youtu.be/UiaWl3nVjZo?si=0aZq0k6XkmJo6NOs",
    thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Anish Sharma",
    profession: "People’s Analytics Consultant @Momentum Group",
    text: "Birla Learn Leap’s teachers are exceptional. Their data science program helped me transition from commerce to a successful career in analytics.",
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

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
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

      {modalVideo && (
        <div className="videomodal-overlay" onClick={closeModal}>
          <div
            className="videomodal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {modalVideo.includes("youtube.com") ||
            modalVideo.includes("youtu.be") ? (
              <iframe
                className="videomodal-video"
                src={
                  modalVideo
                    .replace("youtu.be/", "www.youtube.com/embed/")
                    .split("?")[0]
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls autoPlay className="videomodal-video">
                <source src={modalVideo} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonialSection;
