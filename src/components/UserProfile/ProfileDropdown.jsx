import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const profileDropdown = [
  { title: "My learning", route: "/learning" },
  { title: "My cart", route: "/cart" },
  { title: "Wishlist", route: "/wishlist" },
  { title: "Purchase history", route: "/purchase-history" },

  { title: "Teach on Learnleap", route: "/teach" },
  { title: "Logout" },
  //   "divider",
  //   { title: "Notifications", route: "/notifications" },
  //   { title: "Messages", route: "/messages" },
  //   "divider",
  //   { title: "Account settings", route: "/account-settings" },
  //   { title: "Payment methods", route: "/payment-methods" },
  //   { title: "Subscriptions", route: "/subscriptions" },
  //   { title: "Udemy credits", route: "/credits" },
];

const ProfileDropdown = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (route) => {
    handleClose();
    navigate(route);
  };

  return (
    <>
      {/* Profile Avatar */}
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          border: "2px solid var(--color-primary-light-cyan)",
          backgroundColor: "transparent", // Use "transparent" instead of "none"
        }}
      >
        <Avatar
          alt={user?.name}
          src={user?.image}
          sx={{
            backgroundColor: "transparent !important",
            color: "var(--color-primary-light-cyan)",
          }}
        />
      </IconButton>
      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            width: 250,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "8px 0",
          },
        }}
      >
        {/* User Info */}
        <Box sx={{ px: 2, pb: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              "&:hover": { color: "blue", cursor: "pointer" },
            }}
          >
            <Tooltip title="Profile">{user?.name}</Tooltip>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
        </Box>
        <Divider />

        {/* Dropdown Items */}
        {profileDropdown.map((item, index) =>
          item === "divider" ? (
            <Divider key={index} />
          ) : (
            <MenuItem
              key={index}
              onClick={() => {
                handleItemClick(item.route);
                if (item.title === "Logout") {
                  handleLogout();
                } else {
                  navigate(item.route); // Navigate normally for other menu items
                }
              }}
              //   onClick={() => handleItemClick(item.route)   }
              sx={{
                py: 1,
                px: 2,
                "&:hover": { bgcolor: "#f8f9fa" },
              }}
            >
              {item.title}
            </MenuItem>
          )
        )}
      </Menu>
    </>
  );
};

export default ProfileDropdown;
