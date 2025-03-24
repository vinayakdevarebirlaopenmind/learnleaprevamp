import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Partner.css"; // Import CSS for styling

import CambridgePartner from "../../assets/image/cambridgeassesment.jpg";
import BurlingtonPartner from "../../assets/image/burlingtonprogram.png";
import Sndtwomen from "../../assets/image/sndtwomenpartner.png";
import OrientalCollege from "../../assets/image/orientalcollege.jpg";

const partners = [
  CambridgePartner,
  BurlingtonPartner,
  Sndtwomen,
  OrientalCollege,
];

const PartnersCarousel = () => {
  return (
    <div className="partners-section">
      <h2 className="common-heading">Our Partners</h2>
      <h2 className="common-title">
        We collaborate with the<span className="color-effect"> world's top partners</span>
      </h2>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="partner-carousel"
      >
        {partners.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="partner-img">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
