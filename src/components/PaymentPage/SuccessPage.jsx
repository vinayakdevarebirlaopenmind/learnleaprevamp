import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SuccessFullPayment from "../../assets/image/succesfull_payment.jpg"; // Ensure the path is correct
import Header from "../header";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => navigate("/"), 3000); // Redirect to homepage after 3 seconds
  }, [navigate]);

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Payment Successful! 🎉</h1>
        <img
          src={SuccessFullPayment}
          alt="Payment Successful"
          style={{ width: "300px", height: "auto", margin: "20px 0" }} // Adjust size as needed
        />
        <div
          className="cta-buttons"
          style={{  margin: "20px 0", display:"flex" , alignItems:"center", justifyContent:"center" }}
        >
          <button
            className="join-btn"
            onClick={() => navigate("/purchasehistory")}
          >
            Purchase history
          </button>
          <button className="business-btn" onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>
      </div>
    </>
  );
}
