import React from "react";
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
} from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import Header from "../header";

const UserProfile = () => {
  return (
    <>
    <Header/>
      <Container maxWidth="md" sx={{ display: "flex", py: 4 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 250,
            display: { xs: "none", md: "block" },
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <Avatar sx={{ width: 80, height: 80, mb: 2 }}>V</Avatar>
          <Typography variant="h6">Vinayak</Typography>
          <Typography variant="body2" color="text.secondary">
            View public profile
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Profile
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Photo
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Account Security
          </Typography>
        </Box>

        {/* Main Profile Section */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
          <Typography variant="h5" gutterBottom>
            Public Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Add information about yourself
          </Typography>
          <TextField fullWidth label="First Name" sx={{ mb: 2 }} />
          <TextField fullWidth label="Last Name" sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Headline"
            helperText="Add a professional headline like 'Instructor at Udemy' or 'Architect.'"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="About Me"
            multiline
            rows={3}
            sx={{ mb: 2 }}
          />
          <Select fullWidth defaultValue="en" sx={{ mb: 2 }}>
            <MenuItem value="en">English (US)</MenuItem>
            <MenuItem value="fr">French</MenuItem>
          </Select>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Links</Typography>
          <TextField fullWidth label="Website" sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Twitter Profile"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Twitter color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Facebook Profile"
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
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;
