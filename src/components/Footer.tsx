import React from "react";
import "../App.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-left">
        <h1 className="footer-logo">XARO®</h1>
        <p className="footer-text">
          Your trusted clothing destination for modern styles and timeless fashion.
        </p>
      </div>

      <div className="footer-right">
        <a href="https://wa.me/message/DEHJ54C7PHAQN1"><FaWhatsapp /></a>
        <a href="https://www.facebook.com/xaro.clothing"><FaFacebookF /></a>
        <a href="https://www.instagram.com/xaro_clothing"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@xaro_clothing"><FaTiktok /></a>
        <a href="mailto:xaroclothing@gmail.com"><FaEnvelope /></a>
      </div>
    </div>

    <div className="footer-middle">
      <div className="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><Link to="/collection/women">Women</Link></li>
          <li><Link to="/collection/men">Men</Link></li>
          <li><Link to="/collection/kids">Kids</Link></li>
          <li><Link to="/collection/accessories">Accessories</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About US</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Privacy & Legal</h4>
        <ul>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Support</h4>
        <ul>
          <li><Link to="/shipping">Shipping Info</Link></li>
        </ul>
      </div>
    </div>

    <hr className="footer-divider" />

    <div className="footer-bottom">
  <p>
    Copyright © 2026 XARO Clothing. All rights reserved.
    <br />
    Powered by ◈ {" "}
    <a
      href="https://xenora-labs.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="brand-link"
    >
       Xenora Labs
    </a>
  </p>
</div>

    </footer>
  );
}

export default Footer;