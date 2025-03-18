import { motion } from "framer-motion";
import { useState } from "react";
import "../css/Modal.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSubmitAskMeEnquiryDataMutation } from "../../store/enquiryApiSlice";
import { Alert, Snackbar } from "@mui/material";

export const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { user } = useSelector((state) => state.auth);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    query: "From Ask me button",
  });

  const [submitEnquiry, { isLoading }] = useSubmitAskMeEnquiryDataMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.phone) {
      setErrorMessage("Please enter your mobile number.");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
  
    try {
      await submitEnquiry(formData).unwrap();
      setSuccessMessage("Your request has been submitted successfully!");
      setShowSuccess(true);
  
      // Delay closing modal to allow success message display
      setTimeout(() => {
        setShowSuccess(false);
        onClose(); // Close modal after showing success message
      }, 2000);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setErrorMessage("Failed to submit form. Please try again.");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };
  

  return (
    <>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Request a Call Back</h2>
          <p>Let us help you guide towards your career path.</p>

          <div className="phone-input">
            <span className="flag-icon">🇮🇳 +91</span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <button
            className="call-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <FaPhoneAlt /> {isLoading ? "Submitting..." : "Request a Call Back"}
          </button>
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
          <div className="support-info">
            <p>OR contact our support. We are available 24/7.</p>
            <div className="contact-options">
              <div className="contact-box">
                <strong>📞 +91 79777 68801</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
