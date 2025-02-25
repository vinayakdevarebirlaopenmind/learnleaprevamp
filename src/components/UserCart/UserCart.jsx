import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../../store/cartSlice";
import "./UserCart.css";

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">
                    {item.price} 
                  </p>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3 className="cart-total">Total: ₹{totalPrice}</h3>

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
  );
}
