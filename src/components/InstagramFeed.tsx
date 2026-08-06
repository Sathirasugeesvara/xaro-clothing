import { FaInstagram } from "react-icons/fa";
import config from "../config";
import "../App.css";

const InstagramFeed = () => {
  const posts = config.instagramPosts.filter((p) => p.image);

  if (posts.length === 0) return null;

  return (
    <div className="insta-feed">
      <h2 className="title">
        <FaInstagram /> @{config.social.instagram.split("/").filter(Boolean).pop()}
      </h2>

      <div className="insta-grid">
        {posts.map((post, i) => (
          <a href={post.link} target="_blank" rel="noopener noreferrer" key={i} className="insta-tile">
            <img src={post.image} alt="Instagram post" />
          </a>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          Follow us on Instagram →
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
