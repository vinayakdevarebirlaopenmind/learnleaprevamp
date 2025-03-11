import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, []);

  return (
    <div>
      <h1>Payment Successful! 🎉</h1>
      <p>Redirecting to homepage...</p>
    </div>
  );
}
