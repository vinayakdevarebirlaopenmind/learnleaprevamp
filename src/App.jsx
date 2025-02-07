import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Signup from "../src/components/SignUp/SignUp";
import Login from "./components/Login/Login";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";
import { CourseDetails } from "./components/CourseDetails/CourseDetails";
import EnquireForm from "./components/Enquireform/EnquireForm";
// import "../src/components/css/tokens.css";
function App() {
  return (
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
      <FloatingChatbot />
    </>
  );
}

export default App;
