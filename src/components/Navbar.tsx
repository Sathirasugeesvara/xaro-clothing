import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import config from "../config";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">{config.shopNameFull}</Link>
      </div>

      <ul className="navbar-links desktop-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/collection/women">Women</Link></li>
          <li><Link to="/collection/men">Men</Link></li>
          <li><Link to="/collection/kids">Kids</Link></li>
          <li><Link to="/collection/accessories">Accessories</Link></li>
        </ul>

      <div className="navbar-actions">
        <button
          type="button"
          className="nav-icon"
          onClick={() => navigate("/search")}
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(true)}>
          <FaBars />
      </div>

    </nav>


    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>{config.shopNameFull}</h2>
          <FaTimes onClick={() => setIsOpen(false)} />
        </div>

        <ul className="sidebar-links">
          <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/collection">Collection</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/collection/women">Women</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/collection/men">Men</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/collection/kids">Kids</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/collection/accessories">Accessories</Link></li>
        </ul>
      </div>
    </>


  );
};

export default Navbar;
