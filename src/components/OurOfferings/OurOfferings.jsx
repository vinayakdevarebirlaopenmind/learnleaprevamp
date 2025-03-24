import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
  FaMapMarkerAlt,
  FaLayerGroup,
  FaBook,
  FaUserGraduate,
} from "react-icons/fa";
import "./OfferingsCarousel.css";

const offerings = [
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "90+ K12 Schools",
    description:
      "90+ K12 schools offering quality education from kindergarten to 12th.",
  },
  {
    icon: <FaLayerGroup size={40} />,
    title: "101+ Preschools",
    description:
      "101+ preschools providing foundational early education and nurturing environments.",
  },
  {
    icon: <FaBook size={40} />,
    title: "5 Courses",
    description:
      "Our programs are up-to-date with prevailing industry standards and best practices.",
  },
  {
    icon: <FaUserGraduate size={40} />,
    title: "10K+ Placements",
    description:
      "10,000+ placement opportunities for students across various industries and fields.",
  },
];

export default function OurOfferings() {
  return (
    <div className="carousel-container">
      <h2 className="common-title">
        Our Presence & <span className="color-effect">Offerings</span>
      </h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="carousel-wrapper"
      >
        {offerings.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <div className="carousel-icon">
                <span>{item.icon}</span>
              </div>
              <h3 className="common-heading">{item.title}</h3>
              <p className="carousel-text">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
