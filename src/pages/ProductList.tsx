import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchProducts, type Product } from "../utils/products";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // 🔥 FETCH DATA
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [retryCount]);

  const normalizeText = (value: unknown) => String(value ?? "").trim().toLowerCase();
  const normalizedCategory = normalizeText(category);
  const normalizedSearch = normalizeText(searchQuery);

  // 🔥 FILTER PRODUCTS
  const filteredProducts = products.filter((p) => {
    const matchesCategory = normalizedCategory ? normalizeText(p?.category) === normalizedCategory : true;
    const matchesSearch = normalizeText(p?.name).includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  // 🔥 SKELETON CARD
  const SkeletonCard = () => {
    return <div className="skeleton-card"></div>;
  };

  // 🔥 LOADING UI
  if (loading) {
    return (
      <div className="product-page">
        <h2 className="title">Loading...</h2>

        <div className="grid">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fetch-error">
        <p>Couldn't load products. Check your connection and try again.</p>
        <button className="add-btn" style={{ maxWidth: 220 }} onClick={() => setRetryCount((c) => c + 1)}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2 className="title">
        {category
          ? `${category.toUpperCase()} Collection`
          : searchQuery
          ? `Search: "${searchQuery}"`
          : "Our Collection"}
      </h2>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={Number(product.price)}
              image={product.image}
              stock={Number(product.stock)}
              sizes={product.sizes}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No products found 😢</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;