import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">XARO®</Link>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li
            className="department"
            onMouseEnter={() => setDeptOpen(true)}
            onMouseLeave={() => setDeptOpen(false)}
>
            <span>Department ▾</span>

          <ul className={`dropdown ${deptOpen ? "show" : ""}`}>
            <li>
              <Link to="/kids" onClick={() => setDeptOpen(false)}>Kids</Link>
            </li>
            <li>
              <Link to="/mens" onClick={() => setDeptOpen(false)}>Mens</Link>
            </li>
            <li>
              <Link to="/womens" onClick={() => setDeptOpen(false)}>Womens</Link>
            </li>
            <li>
              <Link to="/accessories" onClick={() => setDeptOpen(false)}>Accessories</Link>
            </li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact US</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/search" className="nav-icon"><FaSearch /></Link>
        <Link to="/wishlist" className="nav-icon"><FaHeart /></Link>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
    </nav>
  );
};

export default Navbar;
