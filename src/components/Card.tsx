import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import "../App.css";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  sizes?: string; // comma-separated, e.g. "S,M,L"
};

const Card = ({ id, name, price, image, stock, sizes }: ProductProps) => {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const liked = isWishlisted(id);

  const sizeList = sizes ? sizes.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize || stock === 0) return;
    addToCart({ id, name, price, image, size: selectedSize }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* Wishlist toggle */}
      <button
        className="heart-btn"
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          toggleWishlist({ id, name, price, image, stock, sizes });
        }}
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FaHeart className={liked ? "heart active" : "heart"} />
      </button>

      {/* Image */}
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>

      {/* Info */}
      <div className="product-info">
        <h3 className="name">{name}</h3>

        <p className="price">{formatPrice(price)}</p>

        <span className={stock > 0 ? "stock in" : "stock out"}>
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </span>

        {/* Quick size + add to cart — skip the details page for a fast order */}
        {stock > 0 && sizeList.length > 0 && (
          <div className="quick-add" onClick={(e) => e.stopPropagation()}>
            <div className="quick-size-list">
              {sizeList.map((s) => (
                <button
                  key={s}
                  className={`quick-size ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              className="quick-add-btn"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
