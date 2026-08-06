import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import Card from "../components/Card";
import "../App.css";

const Wishlist = () => {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="product-page" style={{ textAlign: "center" }}>
        <h2 className="title">Your Wishlist</h2>
        <p style={{ color: "var(--grey)" }}>You haven't saved anything yet.</p>
        <Link to="/collection" className="whatsapp-link">
          Browse the collection →
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2 className="title">Your Wishlist</h2>
      <div className="grid">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            stock={item.stock}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
