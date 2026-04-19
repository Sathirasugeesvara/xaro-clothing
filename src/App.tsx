import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ShippingInfo from "./pages/shipping-info";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";


const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/collection/:category" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/kids" element={<h1>Kids Section</h1>} />
        <Route path="/mens" element={<h1>Mens Section</h1>} />
        <Route path="/womens" element={<h1>Womens Section</h1>} />
        <Route path="/accessories" element={<h1>Accessories Section</h1>} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default App;