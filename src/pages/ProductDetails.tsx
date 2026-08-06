import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import config, { getWhatsAppUrl } from "../config";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import TrustBadges from "../components/TrustBadges";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  // Fetch data from Google Sheets API (SheetDB)
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

  // Support up to 3 images per product via optional "image2"/"image3" sheet
  // columns. Falls back gracefully to just "image" if those aren't set.
  const images = [product.image, product.image2, product.image3].filter(Boolean);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(
      { id: product.id, name: product.name, price: Number(product.price), image: product.image, size: selectedSize },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order:

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}
Price: ${formatPrice(product.price)}

Link: ${window.location.href}`;

    window.open(getWhatsAppUrl(message), "_blank");
  };

  const outOfStock = Number(product.stock) === 0;

  return (
    <div className="details-container">

      {/* LEFT IMAGE GALLERY */}
      <div className="details-left">
        <img src={images[activeImage]} alt={product.name} />

        {images.length > 1 && (
          <div className="thumb-row">
            {images.map((img, i) => (
              <button
                key={i}
                className={`thumb ${activeImage === i ? "active" : ""}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${product.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT INFO */}
      <div className="details-right">
        <h1>{product.name}</h1>

        <p className="price">{formatPrice(product.price)}</p>

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

        {/* ADD TO CART */}
        <button
          className="add-btn"
          disabled={!selectedSize || outOfStock}
          onClick={handleAddToCart}
        >
          {outOfStock ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
        </button>

        {/* GO TO CART (shown right after adding, so they can checkout) */}
        {added && (
          <button className="whatsapp-btn" style={{ width: "100%", marginTop: 10 }} onClick={() => navigate("/cart")}>
            View Cart & Checkout
          </button>
        )}

        {/* QUICK ORDER — skips the cart for a single-item WhatsApp order */}
        <button
          className="cart-clear-btn"
          disabled={!selectedSize || outOfStock}
          onClick={handleWhatsAppOrder}
          style={{ marginTop: 14 }}
        >
          Or order just this item now →
        </button>

        <TrustBadges />
      </div>
    </div>
  );
};

export default ProductDetails;
