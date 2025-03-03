import React from "react";
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
      <h2 className="partners-heading">
        We collaborate with the <span>world's top partner</span>
      </h2>
      <div className="partner-container">
        {partners.map((logo, index) => (
          <div key={index} className="partner-img">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
