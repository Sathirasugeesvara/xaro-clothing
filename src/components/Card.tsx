import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../App.css";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

const Card = ({ id, name, price, image, stock }: ProductProps) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* ❤️ Like button only */}
      <button
        className="heart-btn"
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          setLiked(!liked);
        }}
      >
        <FaHeart className={liked ? "heart active" : "heart"} />
      </button>

      {/* 🖼 Image */}
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>

      {/* 📦 Info */}
      <div className="product-info">
        <h3 className="name">{name}</h3>

        <p className="price">Rs {price}</p>

        <span className={stock > 0 ? "stock in" : "stock out"}>
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default Card;