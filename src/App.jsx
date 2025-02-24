import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Signup, { TestComponent } from "../src/components/SignUp/SignUp";
import Login from "./components/Login/Login";
import FloatingChatbot from "./components/FloatingChatbot/FloatingChatbot";
import { CourseDetails } from "./components/CourseDetails/CourseDetails";
import EnquireForm from "./components/Enquireform/EnquireForm";
import "../src/components/css/tokens.css";
import OfflinePage from "./components/OfflinePage/offlinePage";
import { register } from "./serviceWorkerRegistration";
import { useEffect, useState } from "react";
import PageNotFound from "./components/PageNotfound/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  //checks if user is online or not then it shows him a custom offline page
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
      <GoogleOAuthProvider clientId="515253909493-gj5ca3a4h5ev1pnqg013ols2akg9nqoj.apps.googleusercontent.com">
        <Router>
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
            />{" "}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route path="/ecced-certificate" element={<CourseDetails />} />
            <Route path="/ecced-diploma" element={<CourseDetails />} />
            <Route path="/k12-certificate" element={<CourseDetails />} />
            <Route
              path="/leadership-in-education"
              element={<CourseDetails />}
            />
            <Route path="/burlington-english" element={<CourseDetails />} />
            <Route path="/enquireform" element={<EnquireForm />} />

            <Route path="/testcomponent" element={<TestComponent />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  ) : (
    <OfflinePage />
  );
}

export default App;
