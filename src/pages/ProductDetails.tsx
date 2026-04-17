import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string | number | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h1>Product not found</h1>;


     // ✅ WhatsApp Order Function
  const handleWhatsAppOrder = () => {
    const phoneNumber = "94764627089"; 

    const message = `Hello, I want to order:

    Product: ${product.name}
    Size: ${selectedSize}
    Quantity: ${quantity}
    Price: Rs ${product.price}

    Link: ${window.location.href}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };



  return (
    <div className="details-container">
      
      {/* LEFT SIDE */}
      <div className="details-left">
        <img src={product.image} alt={product.name} />
      </div>

      {/* RIGHT SIDE */}
      <div className="details-right">
        <h1>{product.name}</h1>

        <p className="price">Rs {product.price}</p>

        <p className="desc">{product.description}</p>

        {/* SIZE */}
        <div className="sizes">
          <h4>Select Size</h4>
          <div className="size-list">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="quantity">
          <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        {/* BUTTON */}
        <button
          className="add-btn"
          disabled={!selectedSize || product.stock === 0}
          onClick={handleWhatsAppOrder}
        >
          {product.stock > 0 ? "Order via WhatsApp" : "Out of Stock"}
        </button>

      </div>
    </div>
  );
};

export default ProductDetails;