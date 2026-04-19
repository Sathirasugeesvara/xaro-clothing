import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../App.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import womenImg from "../assets/homewomen.jpg";
import menImg from "../assets/homemen.jpg";
import accessoriesImg from "../assets/homeaccessories.jpg";
import kids from "../assets/homekids.jpg";

const images = [img1, img2, img3, img4];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (search.trim() !== "") {
        navigate(`/collection?search=${search}`);
      }
    }
  };

const touchStartX = useRef(0);
const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
  touchEndX.current = e.changedTouches[0].screenX;

  if (touchStartX.current - touchEndX.current > 50) nextSlide();
  if (touchEndX.current - touchStartX.current > 50) prevSlide();
};

  return (
    <>
      <div
        className="hero-home"
        style={{ backgroundImage: `url(${images[current]})` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>XARO CLOTHING</h1>
          <p>Where style meets attitude 🐺</p>

          <div className="hero-search">
  <div className="search-box">
    <input
      type="text"
      placeholder="What are you looking for today?"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleSearchKeyDown}
    />
    <span
      className="search-icon"
      onClick={() => {
        if (search.trim() !== "") {
          navigate(`/collection?search=${search}`);
        }
      }}
    >
      <FaSearch />
    </span>
  </div>
</div>

          <button onClick={() => navigate("/collection")}>
            Shop Now
          </button>
        </div>

        <button className="arrow left desktop-only" onClick={prevSlide}>❮</button>
        <button className="arrow right desktop-only" onClick={nextSlide}>❯</button>

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

      {/* CATEGORY SECTION */}
      <section className="home-categories">
        <div className="category-card" onClick={() => navigate("/collection/women")}>
          <img src={womenImg} alt="Women" />
          <div className="category-overlay">SHOP WOMENS</div>
        </div>

        <div className="category-card" onClick={() => navigate("/collection/men")}>
          <img src={menImg} alt="Men" />
          <div className="category-overlay">SHOP MENS</div>
        </div>

        <div className="category-card" onClick={() => navigate("/collection/kids")}>
          <img src={kids} alt="Kids" />
          <div className="category-overlay">SHOP KIDS</div>
        </div>

        <div className="category-card" onClick={() => navigate("/collection/accessories")}>
          <img src={accessoriesImg} alt="Accessories" />
          <div className="category-overlay">SHOP ACCESSORIES</div>
        </div>
      </section>
    </>
  );
};

export default Home;