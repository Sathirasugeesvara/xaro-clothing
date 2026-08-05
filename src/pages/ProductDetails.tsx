import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import config, { getWhatsAppUrl } from "../config";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // 🔥 Fetch data from Google Sheets API (SheetDB)
  useEffect(() => {
    fetch(config.sheetDbUrl)
      .then(res => res.json())
      .then(data => {
        const found = data.find((item: any) => item.id == id);
        setProduct(found);
      })
      .catch(err => console.error("Failed to load product:", err));
  }, [id]);

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>;

  // convert sizes "S,M,L" → ["S","M","L"]
  const sizes = product.sizes ? product.sizes.split(",") : [];

  // WhatsApp order
  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order:

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}
Price: Rs ${product.price}

Link: ${window.location.href}`;

    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <div className="details-container">
      
      {/* LEFT IMAGE */}
      <div className="details-left">
        <img src={product.image} alt={product.name} />
      </div>

      {/* RIGHT INFO */}
      <div className="details-right">
        <h1>{product.name}</h1>

        <p className="price">Rs {product.price}</p>

        <p className="desc">{product.description}</p>

        {/* SIZE */}
        <div className="sizes">
          <h4>Select Size</h4>

          <div className="size-list">
            {sizes.map((size: string, i: number) => (
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
          <button onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        {/* ORDER BUTTON */}
        <button
          className="add-btn"
          disabled={!selectedSize || Number(product.stock) === 0}
          onClick={handleWhatsAppOrder}
        >
          {Number(product.stock) > 0 ? "Order via WhatsApp" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;