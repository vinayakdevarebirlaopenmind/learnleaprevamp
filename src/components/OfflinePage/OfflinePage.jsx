import React from "react";

function OfflinePage() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>No Internet Connection</h1>
        <p style={styles.text}>Please check your connection and try again.</p>
      </div>
    </>
  );
}
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#ff4757",
  },
  text: {
    color: "#2f3542",
  },
};

export default OfflinePage;
