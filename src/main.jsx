import { StrictMode } from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import ModernFooter from "./components/Footer/Footer";
// import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    {/* <ModernFooter/> */}
  </Provider>
);

{
  /* <FloatingChatbot /> */
}
