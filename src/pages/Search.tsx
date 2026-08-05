import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/collection?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="product-page" style={{ maxWidth: 500, margin: "60px auto", textAlign: "center" }}>
      <h2 className="title">Search Products</h2>

      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8, marginTop: 20 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name..."
          autoFocus
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 2,
            border: "1px solid var(--hairline)",
            fontFamily: "var(--font-body)",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            borderRadius: 2,
            border: "none",
            background: "var(--rust)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
