import React, { useState, useEffect } from "react";
import "./Eventpage.css"; // Updated CSS file name
import { BsCalendarPlus, BsShare } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Header from "../header";

const events = [
  {
    id: 1,
    title: "Advanced React Workshop",
    description: "Deep dive into React hooks and performance optimization",
    date: "2024-03-15T10:00:00",
    status: "upcoming",
    attendees: 150,
    venue: "online",
    price: 0,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Comprehensive web development course for beginners",
    date: "2024-02-20T09:00:00",
    status: "upcoming",
    attendees: 200,
    venue: "physical",
    price: 299,
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of user interface and experience design",
    date: "2023-12-10T14:00:00",
    status: "completed",
    attendees: 120,
    venue: "physical",
    price: 199,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of user interface and experience design",
    date: "2023-12-10T14:00:00",
    status: "completed",
    attendees: 120,
    venue: "physical",
    price: 199,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of user interface and experience design",
    date: "2023-12-10T14:00:00",
    status: "completed",
    attendees: 120,
    venue: "physical",
    price: 199,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of user interface and experience design",
    date: "2023-12-10T14:00:00",
    status: "completed",
    attendees: 120,
    venue: "physical",
    price: 199,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
];

const Eventpage = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    let result = [...events];

    const currentDate = new Date();

    if (searchQuery) {
      result = result.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus === "upcoming") {
      result = result.filter((event) => new Date(event.date) > currentDate);
    } else if (filterStatus === "completed") {
      result = result.filter((event) => new Date(event.date) <= currentDate);
    }

    switch (sortBy) {
      case "date":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "attendees":
        result.sort((a, b) => b.attendees - a.attendees);
        break;
      case "price":
        result.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredEvents(result);
  }, [filterStatus, sortBy, searchQuery]);

  return (
    <>
      <Header />
      <div className="learnleap-events-section">
        <h2 className="common-heading">
          Learnleap <span className="color-effect">Events</span>
        </h2>

        <div className="learnleap-events-filters">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Events</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Sort by Date</option>
            <option value="attendees">Sort by Attendees</option>
            <option value="price">Sort by Price</option>
          </select> */}
        </div>

        <div className="learnleap-events-grid">
          {filteredEvents.map((event) => (
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
              <h3>{event.title}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.attendees} attendees</p>
              <span className={`learnleap-events-tag ${event.status}`}>
                {event.status}
              </span>
              <p className="learnleap-events-price">
                {event.price === 0 ? "Free" : `$${event.price}`}
              </p>
            </div>
          ))}
        </div>

        {openDialog && selectedEvent && (
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
        )}
      </div>
    </>
  );
};

export default Eventpage;
