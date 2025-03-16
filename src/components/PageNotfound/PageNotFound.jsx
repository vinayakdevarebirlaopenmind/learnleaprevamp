import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <h2>404 Page Not Found</h2>
      <button onClick={() => navigate("/login")} className="login">Login</button>
    </div>
  );
}

export default PageNotFound;
