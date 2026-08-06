import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { getWhatsAppUrl } from "../config";
import { formatPrice } from "../utils/format";
import "../App.css";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} — Size: ${i.size} — Qty: ${i.quantity} — ${formatPrice(i.price * i.quantity)}`
      )
      .join("\n");

    const message = `Hello, I want to order:\n\n${lines}\n\nTotal: ${formatPrice(totalPrice)}`;

    window.open(getWhatsAppUrl(message), "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="product-page" style={{ textAlign: "center" }}>
        <h2 className="title">Your Cart</h2>
        <p style={{ color: "var(--grey)" }}>Your cart is empty.</p>
        <Link to="/collection" className="whatsapp-link">
          Browse the collection →
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2 className="title">Your Cart</h2>

      <div className="cart-list">
        {items.map((item) => (
          <div className="cart-item" key={`${item.id}-${item.size}`}>
            <img src={item.image} alt={item.name} className="cart-item-img" />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-item-size">Size: {item.size}</p>
              <p className="price">{formatPrice(item.price)}</p>

              <div className="quantity">
                <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
              </div>
            </div>

            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(item.id, item.size)}
              aria-label="Remove item"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <span className="price">{formatPrice(totalPrice)}</span>
        </div>

        <button className="add-btn" onClick={handleCheckout}>
          Checkout via WhatsApp
        </button>

        <button className="cart-clear-btn" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
