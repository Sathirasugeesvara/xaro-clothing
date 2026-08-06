import { FaCheckCircle } from "react-icons/fa";
import config from "../config";
import "../App.css";

const TrustBadges = () => {
  if (!config.trustBadges.length) return null;

  return (
    <ul className="trust-badges">
      {config.trustBadges.map((badge, i) => (
        <li key={i}>
          <FaCheckCircle /> {badge}
        </li>
      ))}
    </ul>
  );
};

export default TrustBadges;
