import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PurchaseHistory.css";
import Header from "../header";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/constants";
import CourseSection from "../courses/CourseSection";

function PurchaseHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user); // ✅ Fix: Get user details

  useEffect(() => {
    const fetchTransactions = async () => {
        console.log(`${API_URL}/api/payments/getOrderByUserId`, { user_id: user?.id });
        // return;
      try {
        const response = await axios.get(`${API_URL}/api/payments/getOrderByUserId`, { user_id: user?.id });
        setTransactions(response.data); // Assuming API returns an array of transactions
      } catch (err) {
        setError("No Purchase Found, Please Purchase Course");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Header />
      <div className="purchase-history-container">
        <p className="common-title">
          Purchase <span className="color-effect">Transactions</span>
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
                  <th>Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.program_id}</td>
                    <td>{transaction.program_name}</td>
                    <td>{transaction.email}</td>
                    <td>{transaction.transaction_id}</td>
                    <td>{transaction.total_amount}</td>
                    <td>{transaction.purchase_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            {!loading && !error && <p>No transactions found.</p>}
            {/* <CourseSection /> */}
          </>
        )}
      </div>
    </>
  );
}

export default PurchaseHistory;
