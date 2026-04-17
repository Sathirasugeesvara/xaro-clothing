import Card from "../components/Card";
import { products } from "../data/products";
import "../App.css";

const ProductList = () => {
  return (
    <div className="product-page">
      <h2 className="title">Our Collection</h2>

      <div className="grid">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;