import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Box, Typography, TextField, MenuItem } from "@mui/material";
import { useSubmitMandateDetailsMutation } from "../../store/enquiryApiSlice";
import { useSelector } from "react-redux";
import SuccessAlert from "../Alerts/SuccesAlert";

const API_KEY = "Y3FuTmtxeVgxMWl2WjF0eEFHbWNNVkRVRWE1dENMRVJkRDZjZGNKUQ==";
const API_URL = "https://api.countrystatecity.in/v1/countries/IN/states";

const MandtoryForm = ({ open, handleClose }) => {
  const { user } = useSelector((state) => state.auth);

  const [submitEnquiry, { isLoading }] = useSubmitMandateDetailsMutation();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    phone: "",
    age: "",
    email: user?.email, // Hardcoded for now
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    state: false,
    city: false,
    phone: false,
    age: false,
  });

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
    }
  }, [formData.state, states]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const newErrors = {
      state: !formData.state,
      city: !formData.city,
      phone: !/^\d{10}$/.test(formData.phone),
      age: !/^\d+$/.test(formData.age),
    };
    setErrors(newErrors);
  
    if (!Object.values(newErrors).includes(true)) {
      try {
        const response = await submitEnquiry(formData).unwrap();
        
        console.log("Form submitted successfully:", response); // Debugging log
        setSuccessMessage(`Form submitted successfully!`);
        setShowSuccess(true);
  
        setTimeout(() => {
          setShowSuccess(false);
          handleClose({ phone: formData.phone });
        }, 2000); // Wait 3 seconds before closing        handleClose({ phone: formData.phone });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form, please try again.");
      }
    }
  };
  

  return (
    <>
      <SuccessAlert
        open={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)}
      />
      <Modal open={open} onClose={() => {}} aria-labelledby="modal-title">
        <Box sx={modalStyle}>
          <p className="common-title">
            Mandatory <span className="color-effect">Form</span>
          </p>
          <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}></Typography>

          <TextField
            select
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
            helperText={errors.state ? "State is required" : ""}
            sx={inputStyle}
          >
            {states.map((s) => (
              <MenuItem key={s.iso2} value={s.name}>
                {s.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            helperText={errors.city ? "City is required" : ""}
            sx={inputStyle}
            disabled={!formData.state}
          >
            {cities.map((c) => (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={
              errors.phone ? "Enter a valid 10-digit phone number" : ""
            }
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Age"
            name="age"
            type="text"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
            helperText={errors.age ? "Enter a valid age" : ""}
            sx={inputStyle}
          />

          {/* Email Field (Hidden) */}
          <input type="hidden" name="email" value={formData.email} />

          <button
            className="business-btn"
            onClick={handleSubmit}
            disabled={isLoading}
            sx={{ mt: 2 }}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </Box>
      </Modal>
    </>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
};

const inputStyle = { mb: 2 };

export default MandtoryForm;
