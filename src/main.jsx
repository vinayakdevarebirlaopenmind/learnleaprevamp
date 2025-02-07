import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
// import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <FloatingChatbot /> */}
  </StrictMode>
);
