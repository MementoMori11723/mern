import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <Link to="/search">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </Link>
  );
};

export default SearchBar;
