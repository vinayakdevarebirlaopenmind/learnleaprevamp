import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Signup from "../src/components/SignUp/SignUp";
import Login from "./components/Login/Login";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";
import  CourseDetails  from "./components/CourseDetails/CourseDetails";
import EnquireForm from "./components/Enquireform/EnquireForm";
import "../src/components/css/tokens.css";
import OfflinePage from "./components/OfflinePage/offlinePage";
import { register } from "./serviceWorkerRegistration";
import { useEffect, useState } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    register();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline ? (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ecced-certificate" element={<CourseDetails />} />
          <Route path="/ecced-diploma" element={<CourseDetails />} />
          <Route path="/k12-certificate" element={<CourseDetails />} />
          <Route path="/leadership-in-education" element={<CourseDetails />} />
          <Route path="/burlington-english" element={<CourseDetails />} />
          <Route path="/enquireform" element={<EnquireForm />} />
        </Routes>
      </Router>
    </>
  ) : (
    <OfflinePage />
  );
}

export default App;
