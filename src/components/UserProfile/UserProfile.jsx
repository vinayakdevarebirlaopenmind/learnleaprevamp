import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  Avatar,
  Divider,
  InputAdornment,
  IconButton,
  Container,
  InputLabel,
  Button,
  FormControl,
  Input,
} from "@mui/material";
import { Facebook } from "@mui/icons-material";
import Header from "../header";
import { useSelector } from "react-redux";
import TwitterLogo from "../../assets/image/twitter-new-logo.png";
import { useUpdateUserProfileMutation } from "../../store/enquiryApiSlice";
import ModernFooter from "../Footer/Footer";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const [activeTab, setActiveTab] = useState("profile"); // Track active tab
  const [profileImage, setProfileImage] = useState(user?.image || ""); // Store uploaded image

  const [formData, setFormData] = useState({
    user_uid: user?.user_uid || "",
    name: user?.name || "",
    phone: user?.phone || user?.mobile || "",
    email: user?.email || "",
    age: user?.age || "",
    gender: user?.gender || "",
    state: user?.state || "",
    city: user?.city || "",
    about_user: user?.about_user || "",
    user_insta: user?.user_insta || "",
    user_twitter: user?.user_twitter || "",
    user_fb: user?.user_fb || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData).unwrap();
      let existingUser = JSON.parse(localStorage.getItem("user")) || {};
      const newUserData = { ...existingUser, ...formData };
      localStorage.setItem("user", JSON.stringify(newUserData));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile.");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview image
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(user?.image || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("user_uid", user?.user_uid); // Ensure user identification
    formData.append("image", selectedImage); // Append only the image

    try {
      const response = await updateUserProfile(formData).unwrap();

      // Update the profile image in state and localStorage
      setProfileImage(URL.createObjectURL(selectedImage));

      let existingUser = JSON.parse(localStorage.getItem("user")) || {};
      const updatedUser = { ...existingUser, image: response.image }; // Assuming API returns the new image URL
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ display: "flex", py: 4 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 250,
            display: { xs: "none", md: "block" },
            borderRight: "1px solid var(--color-primary-light-cyan)",
            pr: 2,
          }}
        >
          <Avatar sx={{ width: 80, height: 80, mb: 2 }} src={profileImage} />
          <Typography variant="h6">{formData.name}</Typography>
          <Divider
            sx={{ my: 2, borderColor: "var(--color-primary-light-cyan)" }}
          />

          <Typography
            variant="body2"
            sx={{
              mb: 1,
              cursor: "pointer",
              fontWeight: activeTab === "profile" ? "bold" : "normal",
              color: activeTab === "profile" ? "#1976d2" : "#000",
              fontSize: "18px",
            }}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </Typography>

          {/* <Typography
            variant="body2"
            sx={{
              mb: 1,
              cursor: "pointer",
              fontWeight: activeTab === "photo" ? "bold" : "normal",
              color: activeTab === "photo" ? "#1976d2" : "#000",
              fontSize: "18px",
            }}
            onClick={() => setActiveTab("photo")}
          >
            Photo
          </Typography> */}
        </Box>

        {/* Content Area */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
          {activeTab === "profile" ? (
            <form onSubmit={handleSubmit}>
              <p className="common-title">
                Your <span className="color-effect">Profile</span>
              </p>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Add information about yourself
              </Typography>

              <TextField
                fullWidth
                sx={{ mb: 2, mt: 2 }}
                label="User Id"
                value={formData.user_uid}
                disabled
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Email"
                name="email"
                disabled
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="About Me"
                multiline
                rows={3}
                sx={{ mb: 2 }}
                name="about_user"
                value={formData.about_user}
                onChange={handleChange}
              />

              <Divider
                sx={{ my: 2, borderColor: "var(--color-primary-light-cyan)" }}
              />
              <Typography variant="h6">Links</Typography>

              <TextField
                fullWidth
                placeholder="https://www.instagram.com/"
                label="Instagram Profile"
                name="user_insta"
                value={formData.user_insta}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                          alt="Instagram"
                          style={{ width: 24, height: 24 }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                placeholder="https://x.com/"
                label="Twitter Profile"
                name="user_twitter"
                value={formData.user_twitter}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <img
                          src={TwitterLogo}
                          alt="Twitter"
                          style={{ width: 24, height: 24 }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                placeholder="https://www.facebook.com/"
                label="Facebook Profile"
                name="user_fb"
                value={formData.user_fb}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <Facebook color="primary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
              <button disabled={isLoading} className="join-btn">
                {isLoading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          ) : (
            // Photo Upload Section
            <Container maxWidth="sm" sx={{ py: 4 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Photo
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary">
                Add a nice photo of yourself for your profile.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  border: "1px solid var(--color-primary-light-cyan)",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" fontWeight="bold">
                  Image Preview
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 180,
                    backgroundColor: "var(--color-primary-light-cyan)",
                    my: 2,
                    borderRadius: "8px",
                  }}
                >
                  <Avatar src={imagePreview} sx={{ width: 120, height: 120 }} />
                </Box>
                <Divider
                  sx={{ my: 2, borderColor: "var(--color-primary-light-cyan)" }}
                />
                <Typography variant="body2" fontWeight="bold">
                  Add / Change Image
                </Typography>
                <Input
                  type="file"
                  onChange={handleImageChange}
                  sx={{ my: 2, mx: 2 }}
                />
                <button className="join-btn" onClick={handleUpload}>
                  Upload Image
                </button>
              </Box>
            </Container>
          )}
        </Box>
      </Container>
      <ModernFooter />
    </>
  );
};

export default UserProfile;
