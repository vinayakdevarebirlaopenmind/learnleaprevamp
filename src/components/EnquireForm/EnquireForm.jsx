import React, { useState } from "react";
import "./EnquireForm.css";
import Header from "../header";
import { TextField, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";
import CourseList from "../../components/CourseDetails/MiniCourseCard";
const EnquireForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="enquireform-container">
     
        <div className="enquireform-right">
          <h2 className="heading-text">Enquire Form</h2>
          <p>
            Start creating the best possible user experience for your customers.
          </p>

          <form className="enquireform" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>State</InputLabel>
              <Select
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>City</InputLabel>
              <Select
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                <MenuItem value="Houston">Houston</MenuItem>
                <MenuItem value="Miami">Miami</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Program</InputLabel>
              <Select
                label="Program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
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
              fullWidth
            >
              Submit
            </button>
          </form>
        </div>
        <div className="enquireform-left">
        <h2 className="heading-text">Featured courses</h2>
          <p className="subheading-enquiry">
            Start creating the best possible user experience for your customers.
          </p>

        <CourseList/>
        </div>

      </div>
    </>
  );
};

export default EnquireForm;
