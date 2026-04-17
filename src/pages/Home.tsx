import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div className="hero-home"
    style={{ backgroundImage: `url(${images[current]})` }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>XARO CLOTHING</h1>

        <p>Where style meets attitude 🐺</p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="What are you looking for today?"
          />
        </div>

        <button onClick={() => navigate("/collection")}>
          Shop Now
        </button>
      </div>

      {/* ARROWS (hide on mobile) */}
<button className="arrow left desktop-only" onClick={prevSlide}>
  ❮
</button>

<button className="arrow right desktop-only" onClick={nextSlide}>
  ❯
</button>

{/* DOTS */}
<div className="dots">
  {images.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === current ? "active" : ""}`}
      onClick={() => setCurrent(index)}
    />
  ))}
</div>

    </div>
  );
};

export default Home;