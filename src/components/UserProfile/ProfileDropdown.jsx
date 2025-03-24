import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";

const ProfileDropdown = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
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

  const profileDropdown = [
    { title: "Profile", route: "/profile" },
    // { title: "My learning", route: "/learning" },
    { title: `My cart (${cartItems.length} course)`, route: "/cart" },
    {
      title: `Wishlist (${wishlistItems.length} course)`,
      route: "/yourwishlist",
    },
    { title: "Purchase history", route: "/purchase-history" },
    { title: "Teach on Learnleap", route: "/teach" },
    "divider",
    { title: "Logout" },
  ];

  return (
    <>
      {/* Profile Avatar */}
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          border: "2px solid var(--color-primary-light-cyan)",
          backgroundColor: "transparent",
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
            border: "2px solid var(--color-primary-light-cyan)",
          },
        }}
      >
        {/* User Info */}
        <Box sx={{ px: 2, pb: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              "&:hover": {
                color: "var(--color-primary-light-cyan)",
                cursor: "pointer",
              },
            }}
          >
            <Tooltip title="Profile">
              <span>{user?.name}</span>
            </Tooltip>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email.length > 10
              ? `${user.email.substring(0, 18)}...`
              : user?.email}
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "var(--color-primary-light-cyan)" }} />

        {/* Dropdown Items */}
        {profileDropdown.map((item, index) =>
          item === "divider" ? (
            <Divider
              key={index}
              sx={{ borderColor: "var(--color-primary-light-cyan)" }}
            />
          ) : (
            <MenuItem
              key={index}
              onClick={() => {
                handleItemClick(item.route);
                if (item.title === "Logout") {
                  handleLogout();
                }
              }}
              className="profile-dropdown-menu"
              sx={{ py: 1, px: 2 }}
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
