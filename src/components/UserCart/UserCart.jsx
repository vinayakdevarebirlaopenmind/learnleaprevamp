import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../store/cartSlice";
import "./UserCart.css";
import Header from "../header";
import DeleteIcon from "@mui/icons-material/Delete";
import CourseSection from "../courses/CourseSection";
import { FormatIndianNumber } from "../../constants/constants";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? parseInt(item.price.replace("₹", ""))
        : item.price;
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
        <h2 className="cart-title">Learning Trolley</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your Learning Trolley is empty. Shop from our latest courses.
          </p>
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
                      {FormatIndianNumber(item.price)}
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
                  SGST (9%): <span>₹{FormatIndianNumber(sgst)}</span>
                </p>
                <p>
                  CGST (9%): <span>₹{FormatIndianNumber(cgst)}</span>
                </p>
                <hr />
                <h3>
                  Total: <span>₹{FormatIndianNumber(finalTotal)}</span>
                </h3>
              </div>
            </div>

            {/* Cart Buttons */}
            <div className="cart-buttons">
              <button className="clear-cart" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <CourseSection />
    </>
  );
}
