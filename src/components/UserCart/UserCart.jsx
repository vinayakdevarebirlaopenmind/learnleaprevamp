import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../store/cartSlice";
import "./UserCart.css";
import Header from "../header";
import DeleteIcon from "@mui/icons-material/Delete";
import CourseSection from "../courses/CourseSection";
import { API_URL, FormatIndianNumber } from "../../constants/constants";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CartImage from "../../assets/image/trolley_page.png";
import ModernFooter from "../Footer/Footer";

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // ✅ Fix: Get user details

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => {
    // console.log(item.price);
    // console.log(item.id);

    const price =
      typeof item.price === "string"
        ? parseInt(item.price.replace("₹", "")) || 0
        : item.price || 0; // ✅ Fix: Handle undefined price
    return total + price * item.quantity;
  }, 0);

  // GST calculations (9% SGST + 9% CGST)
  const sgst = (subtotal * 9) / 100;
  const cgst = (subtotal * 9) / 100;
  const finalTotal = subtotal + sgst + cgst;

  // Function to show alerts
  const showAlert = (message, severity = "success") => {
    setAlert({ open: true, message, severity });
  };

  // Handle quantity increase or decrease
  const handleQuantityChange = (item, type) => {
    if (type === "added") {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
      showAlert(`${item.title} course added again!`, "success");
    } else if (type === "removed") {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
        showAlert(`${item.title} course removed!`, "success");
      } else {
        dispatch(removeFromCart(item.id));
        showAlert(`Course removed successfully!`, "success");
      }
    }
  };

  // Handle item removal (trash icon click)
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    showAlert(`Course removed successfully!`, "success");
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!isAuthenticated || !user) {
      showAlert("You are not logged in. Redirecting to login! ", "error");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      // Extract product info from cartItems
      const productInfo = cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: subtotal, // ✅ Correct: Use item.price instead of finalTotal
      }));

      // const productInfo = {
      //   id: cartItems[0].id,
      //   title: cartItems[0].title,
      //   quantity: cartItems[0].quantity,
      //   price: cartItems[0].price,
      // };
      // console.log(productInfo);
      // return;

      const response = await axios.post(`${API_URL}/api/payments/pay`, {
        amount: finalTotal.toFixed(2).toString(),
        firstname: user.name,
        email: user.email,
        phone: user.phone || user.mobile || "",
        user_id: user.id,
        productinfo: JSON.stringify(productInfo),
      });

      const { payuData, action } = response.data;

      // Create Form & Auto-submit to PayU
      const form = document.createElement("form");
      form.method = "POST";
      form.action = action;

      Object.keys(payuData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = payuData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      // verifyPayment(payuData.txnid);
    } catch (error) {
      console.error("Payment Error:", error);
      showAlert("Payment failed. Try again later.", "error");
    }
  };

  return (
    <>
      <Header />

      {/* Snackbar Alert */}
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

      <div className="cart-container">
        {cartItems.length !== 0 ? (
          <h2 className="common-heading">
            Your Learning <span className="color-effect">Trolley</span>
          </h2>
        ) : null}
        {cartItems.length === 0 ? (
          <>
            <h2 className="common-heading">
              Your Learning Trolley is empty,{" "}
              <span className="color-effect">
                Shop from our latest courses.
              </span>
            </h2>
            <div className="cart-image-section">
              <img src={CartImage} alt="CartImage" className="CartImage" />
            </div>
          </>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />

                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-price">
                      {FormatIndianNumber(item.price || 0)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="cart-quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item, "removed")}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item, "added")}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="cart-item-remove"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </button>
                </div>
              ))}
            </div>

            {/* Price Breakdown Section */}
            <div className="cart-total-section">
              <h3 className="cart-total">Price Breakdown</h3>
              <div className="price-details">
                <p>
                  Subtotal: <span>₹{FormatIndianNumber(subtotal)}</span>
                </p>
                <p>
                  SGST (9%) : <span>₹{FormatIndianNumber(sgst)}</span>
                </p>
                <p>
                  CGST (9%) : <span>₹{FormatIndianNumber(cgst)}</span>
                </p>
                <hr />
                <h3>
                  Total: <span>₹{FormatIndianNumber(finalTotal)}</span>
                </h3>
              </div>
            </div>

            {/* Cart Buttons */}
            <div className="cart-buttons">
              <button
                className="clear-cart"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <CourseSection />
      <ModernFooter />
    </>
  );
}
