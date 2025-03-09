import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Signup, { TestComponent } from "../src/components/SignUp/SignUp";
import Login from "./components/Login/Login";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";
import { CourseDetails } from "./components/CourseDetails/CourseDetails";
import "../src/components/css/tokens.css";
import OfflinePage from "./components/OfflinePage/offlinePage";
import { register } from "./serviceWorkerRegistration";
import { useEffect, useState } from "react";
import PageNotFound from "./components/PageNotfound/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
import { CartPage } from "./components/UserCart/UserCart";
import Loader from "./components/loader/Loader";
import FaqPage from "./components/FAQ/FaqPage";
import Eventpage from "./components/Events/Eventpage";
import EnquireForm from "./components/EnquireForm/EnquireForm";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(false);

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
    <GoogleOAuthProvider clientId="515253909493-gj5ca3a4h5ev1pnqg013ols2akg9nqoj.apps.googleusercontent.com">
      <Router>
        <PageWrapper setLoading={setLoading} />
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          
          <Route path="/userProfile" element={<CourseDetails />} />
          <Route path="/ecced-certificate" element={<CourseDetails />} />
          <Route path="/ecced-diploma" element={<CourseDetails />} />
          <Route path="/k12-certificate" element={<CourseDetails />} />
          <Route path="/leadership-in-education" element={<CourseDetails />} />
          <Route path="/burlington-english" element={<CourseDetails />} />
          <Route path="/enquireform" element={<EnquireForm />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  ) : (
    <OfflinePage />
  );
}

// Component to track route changes and show loader
function PageWrapper({ setLoading }) {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating load time
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

export default App;
