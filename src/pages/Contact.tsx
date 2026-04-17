import "../App.css";

const Contact = () => {
  const phoneNumber = "94764627089"; 

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
        <p>We are here to help you. Reach out anytime.</p>
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Email: xaro.clothing@gmail.com</p>
        <p>Phone: +94 764 627 089</p>
        <p>Location: Sri Lanka</p>
      </section>

      {/* WhatsApp CTA */}
      <section className="contact-section">
        <h2>Order via WhatsApp</h2>
        <p>Click below to chat with us instantly and place your order.</p>

        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          Chat on WhatsApp
        </button>
      </section>
    </div>
  );
};

export default Contact;