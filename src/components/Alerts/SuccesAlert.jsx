import React from "react";
import { Snackbar, Slide } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const SuccessAlert = ({ open, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      autoHideDuration={3000} // Closes after 2 seconds
      anchorOrigin={{ vertical: "top", horizontal: "right" }} 
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="success"
        sx={{
          backgroundColor: "#4CAF50", // Custom green color
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
    {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SuccessAlert;
