import React from "react";
import "../App.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import config, { getWhatsAppUrl } from "../config";


const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-left">
        <h1 className="footer-logo">{config.shopNameFull}</h1>
        <p className="footer-text">
          {config.tagline}
        </p>
      </div>

      <div className="footer-right">
        <a href={config.whatsappShortLink || getWhatsAppUrl("Hello, I want to know more about your products.")} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href={config.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href={config.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href={config.social.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href={`mailto:${config.email}`}><FaEnvelope /></a>
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
          <li><Link to="/size-guide">Size Guide</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>

    <hr className="footer-divider" />

    <div className="footer-bottom">
  <p>
    Copyright © 2026 Sathira Sugeeesvara. All rights reserved.
    <br />
    Powered by {" "}
    <a
      href="https://sathirasugeesvara.github.io"
      target="_blank"
      rel="noopener noreferrer"
      className="brand-link"
    >
       Sathira Sugeeesvara
    </a>
  </p>
</div>

    </footer>
  );
}

export default Footer;