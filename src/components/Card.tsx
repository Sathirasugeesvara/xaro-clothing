import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { formatPrice } from "../utils/format";
import "../App.css";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

const Card = ({ id, name, price, image, stock }: ProductProps) => {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const liked = isWishlisted(id);

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
          toggleWishlist({ id, name, price, image, stock });
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
      </div>
    </div>
  );
};

export default Card;
