import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessFullPayment from "../../assets/image/succesfull_payment.jpg"; // Ensure the path is correct
import Header from "../header";
import { API_URL } from "../../constants/constants";

export default function Success() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const txnid = params.get("txnid"); // Get txnid from URL
    setTransactionId(txnid);

    if (!txnid) {
      setVerificationStatus("Transaction ID is missing.");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const { data } = await axios.post(
          `${API_URL}/api/payments/verify-payment`,
          { transactionId: txnid },
          { headers: { "Content-Type": "application/json" } }
        );

        if (data.success) {
          setVerificationStatus("Payment Verified Successfully! ✅");
        } else {
          setVerificationStatus(`Verification Failed: ${data.message} ❌`);
        }
      } catch (error) {
        setVerificationStatus("Error verifying payment. Please try again.");
        console.error("Payment verification error:", error);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, []);

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Payment Successful! 🎉</h1>
        <p>Transaction ID: {transactionId || "Not Found"}</p>
        <img
          src={SuccessFullPayment}
          alt="Payment Successful"
          style={{ width: "300px", height: "auto", margin: "20px 0" }}
        />
        <h3>{loading ? "Verifying payment..." : verificationStatus}</h3>
        <div
          className="cta-buttons"
          style={{
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="join-btn"
            onClick={() => navigate("/purchasehistory")}
          >
            Purchase History
          </button>
          <button className="business-btn" onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>
      </div>
    </>
  );
}
