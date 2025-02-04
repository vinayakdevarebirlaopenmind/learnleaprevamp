import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Signup from "../src/components/SignUp/SignUp";
import Login from "./components/Login/Login";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <FloatingChatbot />
    </>
  );
}

export default App;
