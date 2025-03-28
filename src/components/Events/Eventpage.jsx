import React, { useState, useEffect } from "react";
import "./Eventpage.css"; // Updated CSS file name
import { BsCalendarPlus, BsShare } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Header from "../header";
import webinar3dec from "../../assets/image/webinar/online-webinar-13-12-2024.jpg";
import webinar22nov from "../../assets/image/webinar/online-webinar-22-11-2024.jpg";
import webinar27sep from "../../assets/image/webinar/online-webinar-27-09-2024.jpg";
import ModernFooter from "../Footer/Footer";

const events = [
  {
    id: 1,
    title: "Empowering Webinar on Children with Special Needs",
    date: "13-12-2024",
    speaker: "Passionate Educator & Advocate for Inclusive Education",
    description:
      "Teacher Trainer & Leadership Development Specialist | Global Experience in Education",
    image: webinar3dec,
    price: 500,
    Amount: "500",
  },
  {
    id: 2,
    title: "Librarians - Are You in a Silent Zone?",
    date: "22-11-2024",
    speaker: "Ex-Librarian, Storyteller & Podcaster",
    description:
      "Discussion on modern librarian challenges and engagement strategies.",
    price: 0,
    image: webinar22nov,
  },
  {
    id: 3,
    title:
      "Customizing Textbooks and Curriculum to Connect Learning to Students' Lives",
    date: "27-09-2024",
    speaker:
      "HEAD - EXPERIENTIAL LEARNING CENTRE (Somaiya Vidyavihar University)",
    description:
      "A session on making textbooks more engaging and relatable to students.",
    price: 500,
    image: webinar27sep,
  },
];

const Eventpage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Header />
      <div className="learnleap-events-section">
        <h2 className="common-heading">
          Learnleap <span className="color-effect">Events</span>
        </h2>

        <div className="learnleap-events-grid">
          {events.map((event) => (
            <div
              className="learnleap-events-card"
              key={event.id}
              onClick={() => {
                setSelectedEvent(event);
                setOpenDialog(true);
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="learnleap-events-image"
              />
              {/* <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.speaker}</p> */}
              <p className="learnleap-events-price">
                {event.price === 0 ? "Free" : event.price}
              </p>
            </div>
          ))}
        </div>

        {/* {openDialog && selectedEvent && (
          <div className="learnleap-events-dialog-overlay">
            <div className="learnleap-events-dialog">
              <button
                className="learnleap-events-close-btn"
                onClick={() => setOpenDialog(false)}
              >
                <MdClose />
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="learnleap-events-dialog-image"
              />
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.description}</p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedEvent.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Venue:</strong> {selectedEvent.venue}
              </p>
              <p>
                <strong>Attendees:</strong> {selectedEvent.attendees}
              </p>
              <p className="learnleap-events-price">
                {selectedEvent.price === 0 ? "Free" : `$${selectedEvent.price}`}
              </p>
              <button className="learnleap-events-action-btn">
                <BsShare /> Share
              </button>
              <button className="learnleap-events-action-btn primary">
                <BsCalendarPlus /> Add to Calendar
              </button>
            </div>
          </div>
        )} */}
      </div>
      <ModernFooter />
    </>
  );
};

export default Eventpage;
