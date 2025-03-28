import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EnquireForm.css";
import Header from "../header";
import { useSubmitEnquiryDataMutation } from "../../store/enquiryApiSlice";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import CourseList from "../../components/CourseDetails/MiniCourseCard";
import { trendingSearches } from "../../constants/constants";
import CourseSection from "../courses/CourseSection";
import Enquiryimage from "../../assets/image/enquiry_illustrations.jpg";
import { useSelector } from "react-redux";
import ModernFooter from "../Footer/Footer";
const API_KEY = "Y3FuTmtxeVgxMWl2WjF0eEFHbWNNVkRVRWE1dENMRVJkRDZjZGNKUQ==";
const API_URL = "https://api.countrystatecity.in/v1/countries/IN/states";

const EnquireForm = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    state: "",
    city: "",
    program: "",
    query: "",
  });
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        age: user.age || "",
        phone: user.phone || "",
        state: user.state || "",
        city: user.city || "",
      }));
    }
  }, [user]);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [submitEnquiryData, { isLoading, isError, isSuccess }] =
    useSubmitEnquiryDataMutation();

  // Fetch States on Component Mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const { data } = await axios.get(API_URL, {
          headers: { "X-CSCAPI-KEY": API_KEY },
        });
        setStates(data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch Cities when State Changes
  useEffect(() => {
    if (formData.state) {
      const selectedState = states.find((s) => s.name === formData.state);
      if (!selectedState) return;

      const fetchCities = async () => {
        try {
          const { data } = await axios.get(
            `${API_URL}/${selectedState.iso2}/cities`,
            {
              headers: { "X-CSCAPI-KEY": API_KEY },
            }
          );
          setCities(data.sort((a, b) => a.name.localeCompare(b.name)));
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    } else {
      setCities([]); // Clear cities when no state is selected
    }
  }, [formData.state, states]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitEnquiryData(formData).unwrap();
      setSuccessMessage("Form submitted successfully!");
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        age: "",
        phone: "",
        state: "",
        city: "",
        program: "",
        query: "",
      });
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      setErrorMessage("Failed to submit form. Please try again.");
      setShowError(true);

      console.error("Error:", error);

      // Hide error alert after 3 seconds
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      <Header />
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
      <div className="enquireform-container">
        {" "}
        <div className="enquireform-left">
          <img src={Enquiryimage} alt="Enquiryimage" />
          {/* <p className="common-title">
            Pick from the
            <span className="color-effect">best courses available</span>
          </p>
          <CourseList /> */}
        </div>
        <div className="enquireform-right">
          <p className="common-title">
            We wish to know{" "}
            <span className="color-effect">more about you!</span>
          </p>

          <form className="enquireform" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name || user?.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email || user?.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age || user?.age}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone || user?.phone}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            {/* Dependent State Dropdown */}
            <FormControl fullWidth margin="normal">
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={formData.state || user?.state}
                onChange={handleChange}
                required
              >
                {states.map((s) => (
                  <MenuItem key={s.iso2} value={s.name}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Dependent City Dropdown */}
            <FormControl fullWidth margin="normal">
              <InputLabel>City</InputLabel>
              <Select
                name="city"
                value={formData.city || user?.city}
                onChange={handleChange}
                required
                disabled={!formData.state} // Disable until a state is selected
              >
                {cities.map((c) => (
                  <MenuItem key={c.name} value={c.name}>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Program</InputLabel>
              <Select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                {trendingSearches.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
            />

            <button
              type="submit"
              className="enquireform-btn"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>

            {/* {isError && (
              <p className="error-message">
                Error submitting form. Please try again.
              </p>
            )}
            {isSuccess && (
              <p className="success-message">Form submitted successfully!</p>
            )} */}
          </form>
        </div>
      </div>
      <CourseSection />
      <ModernFooter />
    </>
  );
};

export default EnquireForm;
