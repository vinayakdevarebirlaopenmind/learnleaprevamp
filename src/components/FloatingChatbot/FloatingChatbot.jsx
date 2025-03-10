import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./FloatingChatbot.css";
const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="floating-container">
        <motion.button
          className="floating-button"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faPhone} />
          )}
        </motion.button>

        {/* Expanding Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="floating-options"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* Chatbot Button */}
              <motion.button
                className="chatbot-button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowChatbot(true)}
              >
                <span className="tooltip">Chat with us</span>
                <FontAwesomeIcon icon={faComments} />
              </motion.button>

              {/* Contact Us Button */}
              <motion.button
                className="contact-button"
                whileTap={{ scale: 0.9 }}
                onClick={() => (window.location.href = "/enquiry")}
              >
                <span className="tooltip">Contact Us</span>
                <FontAwesomeIcon icon={faPhone} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            className="chatbot-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="chatbot-header">
              <h3>Chatbot</h3>
              <button onClick={() => setShowChatbot(false)}>×</button>
            </div>
            <div className="chatbot-content">
              <p>Chatbot content will go here...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
