import pic1 from "../assets/pic1-1.png";
import pic2 from "../assets/pic2-1.png";
import pic3 from "../assets/pic3-1.png";
import pic4 from "../assets/pic4-1.png";

export const products = [
  {
    id: "1",
    name: "Hoodie",
    price: 4500,
    image: pic1,
    description: "Premium hoodie for everyday wear",
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
  },
  {
    id: "2",
    name: "Oversized T-Shirt",
    price: 2500,
    image: pic2,
    description: "Comfort oversized style",
    sizes: ["M", "L", "XL"],
    stock: 0,
  },
  {
    id: "3",
    name: "Classic Sneakers",
    price: 18900,
    image: pic3,
    description: "Clean street sneakers",
    sizes: [38, 39, 40, 41, 42],
    stock: 12,
  },
  {
    id: "4",
    name: "Classic Polo Shirt",
    price: 2700,
    image: pic4,
    description: "Smart casual polo",
    sizes: ["S", "M", "L"],
    stock: 7,
  }
];