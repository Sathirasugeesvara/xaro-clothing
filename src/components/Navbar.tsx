import React, { useState } from "react";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">XARO®</a>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><a href="/collections/men">Men</a></li>
        <li><a href="/collections/women">Women</a></li>
        <li><a href="/collections/kids">Kids</a></li>
        <li><a href="/collections/accessories">Accessories</a></li>
      </ul>

      <div className="navbar-actions">
        <a href="/search" className="nav-icon"><FaSearch /></a>
        <a href="/wishlist" className="nav-icon"><FaHeart /></a>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
    </nav>
  );
};

export default Navbar;
