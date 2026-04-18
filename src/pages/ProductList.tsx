import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { products } from "../data/products";

const ProductList = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="product-page">
      <h2 className="title">
        {category ? `${category.toUpperCase()} Collection` : "Our Collection"}
      </h2>

      <div className="grid">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;