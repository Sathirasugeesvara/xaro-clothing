import React from "react";
import "../App.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact: React.FC = () => {
  const phoneNumber = "94784627089";

  const handleWhatsApp = () => {
    const message = "Hello, I want to know more about your products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help. Reach out anytime and we’ll get back to you quickly.</p>
      </section>

      {/* Contact Info */}
      <section className="contact-section contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>xaroclothing@gmail.com</p>
          <a href="mailto:xaroclothing@gmail.com">Send Email</a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+94 784 627 089</p>
          <a href="tel:+94784627089">Call Now</a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Sri Lanka</p>
        </div>

      </section>

<br></br><br></br>

      {/* WhatsApp CTA */}
      <section className="contact-section whatsapp-section">
        <h2>Order via WhatsApp</h2>
        <p>Chat with us instantly to place your order or ask anything.</p>

        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          <FaWhatsapp /> Chat on WhatsApp
        </button>

        {/* Direct link (same as footer) */}
        <a
          className="whatsapp-link"
          href="https://wa.me/message/DEHJ54C7PHAQN1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or open WhatsApp chat
        </a>
      </section>

<br></br><br></br>

      {/* Social Media Section */}
      <section className="contact-section social-section">
        <h2>Follow & Watch Us</h2>
        <p>Stay updated with our latest drops, videos, and fashion content.</p>

        <div className="contact-grid">

          <div className="contact-card">
            <FaFacebookF className="contact-icon" />
            <h3>Facebook</h3>
            <p>Follow us for updates & posts</p>
            <a href="https://www.facebook.com/xaro.clothing" target="_blank">
              Visit Page
            </a>
          </div>

          <div className="contact-card">
            <FaInstagram className="contact-icon" />
            <h3>Instagram</h3>
            <p>See photos & reels</p>
            <a href="https://www.instagram.com/xaro_clothing" target="_blank">
              View Profile
            </a>
          </div>

          <div className="contact-card">
            <FaTiktok className="contact-icon" />
            <h3>TikTok</h3>
            <p>Watch videos & trends</p>
            <a href="https://www.tiktok.com/@xaro_clothing" target="_blank">
              Watch Now
            </a>
          </div>

        </div>
      </section>

<br></br><br></br><br></br>

    </div>
  );
};

export default Contact;