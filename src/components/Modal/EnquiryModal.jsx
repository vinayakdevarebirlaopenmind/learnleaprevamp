import { motion } from "framer-motion";
import "../css/Modal.css";
import { IoClose } from "react-icons/io5";
import { FaFlag, FaGlobe, FaPhoneAlt } from "react-icons/fa";
export const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {/* <button
          className="close-btn"
          onClick={() => setShowEnquiryModal(false)}
        >
          <IoClose />
        </button> */}

        {/* Modal Heading */}
        <h2>Request a call back</h2>
        <p>Let us help you guide towards your career path.</p>

        {/* Phone Input */}
        <div className="phone-input">
          <span className="flag-icon">🇮🇳 +91</span>
          <input type="text" placeholder="Phone number" />
        </div>

        {/* Call Information */}
        <div className="call-info">
          <p>
            We will give you a call between <strong>9 AM to 9 PM.</strong>
          </p>
          <ul>
            <li>✅ Non-biased career guidance</li>
            <li>✅ Counseling based on your skills and preference</li>
            <li>✅ No repetitive calls, only as per convenience</li>
          </ul>
        </div>

        {/* Call Button */}
        <button className="call-btn">
          <FaPhoneAlt /> Request a call back
        </button>

        {/* Support Info */}
        <div className="support-info">
          <p>OR contact our support. We are available 24/7.</p>
          <div className="contact-options">
            <div className="contact-box">
              {/* <FaFlag className="icon india" /> */}
              {/* <span>Indian Nationals</span> */}
              <strong>📞 +91 79777 68801</strong>
            </div>
            {/* <div className="contact-box">
              <FaGlobe className="icon globe" />
              <span>Foreign Nationals</span>
              <strong>📞 +918045604032</strong>
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
