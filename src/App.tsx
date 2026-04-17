import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/kids" element={<h1>Kids Section</h1>} />
        <Route path="/mens" element={<h1>Mens Section</h1>} />
        <Route path="/womens" element={<h1>Womens Section</h1>} />
        <Route path="/accessories" element={<h1>Accessories Section</h1>} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;