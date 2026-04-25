import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // 🔥 FETCH DATA
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/0d9w4d1lmz6b1")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // 🔥 FILTER PRODUCTS
  const filteredProducts = products.filter((p: any) => {
    const matchesCategory = category ? p.category === category : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);
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
          filteredProducts.map((product: any) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={Number(product.price)}
              image={product.image}
              stock={Number(product.stock)}
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