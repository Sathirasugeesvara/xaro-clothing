import "../App.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>XARO®</h1>
        <p>Modern Streetwear. Future Identity.</p>
      </section>

      {/* Brand Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          XARO is a modern clothing brand built for individuals who want to
          stand out. We combine minimal design with bold identity to create
          streetwear that speaks confidence.
        </p>
        <p>
          Every collection is designed with purpose — focusing on quality,
          comfort, and a clean aesthetic that fits today’s lifestyle.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To deliver premium-quality clothing while keeping the buying process
          simple and personal. From product selection to direct WhatsApp
          ordering, we connect customers straight to the brand.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why XARO?</h2>
        <ul>
          <li>✔ Premium quality materials</li>
          <li>✔ Minimal & modern designs</li>
          <li>✔ Direct WhatsApp ordering</li>
          <li>✔ Fast and reliable service</li>
        </ul>
      </section>
      <br></br><br></br><br></br>
    </div>
  );
};

export default About;