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
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Header from "../header";
import { useSelector } from "react-redux";
import TwitterLogo from "../../assets/image/twitter-new-logo.png";
const UserProfile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ display: "flex", py: 4 }}>
        <Box
          sx={{
            width: 250,
            display: { xs: "none", md: "block" },
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <Avatar sx={{ width: 80, height: 80, mb: 2 }}>{user?.image}</Avatar>
          <Typography variant="h6">{user?.name}</Typography>
         
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Profile
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Photo
          </Typography>
          {/* <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
            Account Security
          </Typography> */}
        </Box>

        {/* Main Profile Section */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
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
            value={user?.user_uid}
            disabled
          />
          <TextField
            fullWidth
            sx={{ mb: 2, mt: 2 }}
            label="Full Name"
            value={user?.name}
          />
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            label="Phone Number"
            value={user?.phone || user?.mobile}
          />{" "}
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            label="Email"
            value={user?.email}
          />
          <TextField fullWidth sx={{ mb: 2 }} label="Age" value={user?.age} />{" "}
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            label="Gender"
            value={user?.gender || user?.gender}
          />{" "}
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            label="State"
            value={user?.state}
          />{" "}
          <TextField fullWidth sx={{ mb: 2 }} label="City" value={user?.city} />
          <TextField
            fullWidth
            label="About Me"
            multiline
            rows={3}
            sx={{ mb: 2 }}
          />
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Links</Typography>
          <TextField
            fullWidth
            placeholder="https://www.instagram.com/"
            label="Instagram Profile"
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
