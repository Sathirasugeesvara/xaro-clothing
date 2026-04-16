import Card from "../components/Card";
import '../App.css';


import pic1 from "../assets/pic1-1.png";
import pic2 from "../assets/pic2-1.png";
import pic3 from "../assets/pic3-1.png";
import pic4 from "../assets/pic4-1.png";
//import pic5 from "../assets/pic5-1.png";


const products = [
  {
    id: "1",
    name: "Hoodie",
    price: 4500,
    image: pic1,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    stock: 10,
  },
  {
    id: "2",
    name: "Oversized T-Shirt",
    price: 2500,
    image: pic2,
    sizes: ["M", "L", "XL"],
    colors: ["White"],
    stock: 0,
  },
  {
    id: "3",
    name: "Classic Sneakers",
    price: 18900,
    image: pic3,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["White", "Black", "Blue"],
    stock: 12,
  },
  {
    id: "4",
    name: "Classic Polo Shirt",
    price: 2700,
    image: pic4,
    sizes: ["S", "M", "L"],
    colors: ["White", "Blue"],
    stock: 7,
  }
  /*{
    id: "5",
    name: "XARO Essential Shirt",
    price: 5200,
    image: pic5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Light Blue", "Charcoal"],
    stock: 20,
  }*/
];


const ProductList = () => {
  return (
    <>
    <div className="product-page">
      <h2 className="title">Our Collection</h2>

      <div className="grid">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;