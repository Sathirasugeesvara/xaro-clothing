import { useParams, useLocation } from "react-router-dom";
import Card from "../components/Card";
import { products } from "../data/products";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category ? p.category === category : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

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
            <Card key={product.id} {...product} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No products found 😢</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;