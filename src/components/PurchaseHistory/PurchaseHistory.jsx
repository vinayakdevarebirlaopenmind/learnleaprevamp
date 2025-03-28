import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL, courses } from "../../constants/constants";
import Header from "../header";
import "./PurchaseHistory.css";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ModernFooter from "../Footer/Footer";

function PurchaseHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const showAlert = (message, severity = "success") => {
    setAlert({ open: true, message, severity });
  };
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming your Redux store has isAuthenticated

  useEffect(() => {
    // ✅ Check if user is logged in before fetching data
    if (!isAuthenticated || !user) {
      showAlert("You are not logged in. Redirecting to login!", "error");
      setTimeout(() => navigate("/login"), 4000);
      return;
    }

    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/payments/getOrderByUserId`,
          {
            params: { user_id: user.id }, // ✅ Correct way to pass query parameters
          }
        );

        setTransactions(response.data || []);
      } catch (err) {
        setError("No Purchase Found, Please Purchase Course");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [isAuthenticated, user, navigate]);

  return (
    <>
      {" "}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <MuiAlert
          elevation={6}
          variant="outlined"
          sx={{
            backgroundColor: alert.severity === "error" ? "#F8D7DA" : "#D1E7DD",
            color: "#000",
            fontWeight: "bold",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
          severity={alert.severity}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
      <Header />
      <div className="purchase-history-container">
        <p className="common-title">
          Purchase <span className="color-effect">History</span>
        </p>

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && transactions?.length > 0 ? (
          <div className="purchase-history-table-wrapper">
            <table className="purchase-history-table">
              <thead>
                <tr>
                  <th>Program ID</th>
                  <th>Program Name</th>
                  <th>Email</th>
                  <th>Transaction ID</th>
                  <th>Total Amount</th>
                  {/* <th>Purchase Date</th> */}
                </tr>
              </thead>
              <tbody>
                {transactions?.map((transaction, index) => {
                  // Find the matching course by its ID
                  const course = courses.find(
                    (c) => c.id === transaction.program_id
                  );

                  return (
                    <tr key={index}>
                      <td>{transaction.program_id}</td>
                      <td>{course ? course.title : "Unknown Program"}</td>
                      <td>{transaction.email}</td>
                      <td>{transaction.transaction_id}</td>
                      <td>{transaction.total_amount}</td>
                      {/* <td>{transaction.updated_at}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && !error && <p>No transactions found.</p>
        )}
      </div>
      <ModernFooter />
    </>
  );
}

export default PurchaseHistory;
