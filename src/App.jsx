import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import WishlistPage from "./components/Wishlist/WishlistPage";
import Failure from "./components/PaymentPage/Failure";
import Success from "./components/PaymentPage/SuccessPage";
import ScrollToTop from "./constants/ScrollToTop";
import PrivacyPolicy from "./components/PolicyPages/PrivacyPolicy";
import RefundPolicy from "./components/PolicyPages/RefundPolicy";
import AboutUs from "./components/AboutUs/AboutUs";
import ApplyASInstructor from "./components/ApplyInstructor/ApplyAsInstructor";
import { DiplomaProgram } from "./components/CourseDetails/DiplomaProgram";
import { LeadshipCourse } from "./components/CourseDetails/LeadershipCourse";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";
import { CertificateProgramEcced } from "./components/CourseDetails/CertificateProgramEcced";
import { K12Program } from "./components/CourseDetails/K12Program";
import { BurlingtonProgram } from "./components/CourseDetails/BurlingtonProgram";
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
        <ScrollToTop />
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
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ecced-diploma" element={<DiplomaProgram />} />
          <Route path="/leadership-in-education" element={<LeadshipCourse />} />
          <Route
            path="/ecced-certificate"
            element={<CertificateProgramEcced />}
          />
          <Route path="/k12-certificate" element={<K12Program />} />
          <Route path="/burlington-english" element={<BurlingtonProgram />} />
          <Route path="/enquireform" element={<EnquireForm />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/yourwishlist" element={<WishlistPage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/applyasintructor" element={<ApplyASInstructor />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<Success />} />

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
    const timer = setTimeout(() => setLoading(false), 500); // Simulating load time
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

export default App;
