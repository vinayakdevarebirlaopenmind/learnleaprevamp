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
      autoHideDuration={4000} // Closes after 2 seconds
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        variant="outlined"
        severity="success"
        sx={{
          backgroundColor: "#D1E7DD",
          color: "#000",
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
