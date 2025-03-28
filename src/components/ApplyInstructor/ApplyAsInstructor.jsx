import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApplyASInstructor.css";
import Header from "../header";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  Button,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ApplyAsInstructorImage from "../../assets/image/applyasinstructorillustration.png";
import { useSelector } from "react-redux";
import CourseSection from "../courses/CourseSection";
import { useSubmitInstructorDetailsMutation } from "../slice/applyAsInstructorSlice";
import ModernFooter from "../Footer/Footer";
const API_KEY = "Y3FuTmtxeVgxMWl2WjF0eEFHbWNNVkRVRWE1dENMRVJkRDZjZGNKUQ==";
const API_URL = "https://api.countrystatecity.in/v1/countries/IN/states";

const ApplyASInstructor = () => {
  const { user } = useSelector((state) => state.auth);
  const [fileName, setFileName] = useState("Upload PDF"); // State to store file name

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
    file: null, // Store uploaded file
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

  const [applyAsInstructor, { isLoading }] =
    useSubmitInstructorDetailsMutation();

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrorMessage("Only PDF files are allowed.");
        setShowError(true);
        return;
      }
      setFormData((prev) => ({
        ...prev,
        file: file, // Store the file in state
      }));
      setFileName(file.name); // Update file name state
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create FormData to send file + form fields
  //   const submissionData = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     submissionData.append(key, formData[key]);
  //   });

  //   try {
  //     await applyAsInstructor(submissionData).unwrap(); // Call the mutation
  //     setSuccessMessage("Form submitted successfully!");
  //     setShowSuccess(true);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       age: "",
  //       phone: "",
  //       state: "",
  //       city: "",
  //       program: "",
  //       query: "",
  //       file: null,
  //     });
  //     setFileName("Upload PDF"); // Reset file name
  //     setTimeout(() => setShowSuccess(false), 3000);
  //   } catch (error) {
  //     setErrorMessage("Failed to submit form. Please try again.");
  //     setShowError(true);
  //     console.error("Error:", error);
  //     setTimeout(() => setShowError(false), 3000);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show success message without actually uploading
    setSuccessMessage("File submitted successfully!");
    setShowSuccess(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      state: "",
      city: "",
      program: "",
      query: "",
      file: null,
    });

    setFileName("Upload PDF"); // Reset file name

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
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
          <img src={ApplyAsInstructorImage} alt="ApplyAsInstructorImage" />
        </div>
        <div className="enquireform-right">
          <h2 className="common-heading">Join Us as an Instructor! 🚀</h2>
          <p className="common-title">
            Passionate about teaching?{" "}
            <span className="color-effect">
              Apply now and be part of our team!
            </span>
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
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                {fileName}
                <VisuallyHiddenInput
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </Button>
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

export default ApplyASInstructor;
