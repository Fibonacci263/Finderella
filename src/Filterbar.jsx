// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./styles/Filterbar.css";

// eslint-disable-next-line react/prop-types
const FilterBar = ({ onSearch, onFilter, onReload }) => {
  const [type, setType] = useState("lost");
  const [category, setCategory] = useState("electronics");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (value, type) => {
    if (type === "type") {
      setType(value);
      onFilter(value, category); // Trigger filter with type and current category
    } else if (type === "category") {
      setCategory(value);
      onFilter(type, value); // Trigger filter with current type and new category
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Trigger search on input change
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery); // Trigger search when user clicks the search button
  };

  const handleReload = () => {
    setSearchQuery(""); // Reset search input
    onReload(); // Trigger reload to fetch the original data
  };

  return (
    <div className="filter-bar">
      <h1>Finderella: Your Lost and Found Community</h1>

      <h2 className="feed-title">Feed</h2>
      <div className="filter-controls">
        <select
          className="filter-dropdown"
          value={type}
          onChange={(e) => handleFilterChange(e.target.value, "type")}
        >
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <select
          className="filter-dropdown"
          value={category}
          onChange={(e) => handleFilterChange(e.target.value, "category")}
        >
          <option value="Electronics">Electronics</option>
          <option value="Documents">Documents</option>
          <option value="Clothing">Clothing</option>
          <option value="Others">Others</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <button className="filter-button" onClick={() => onFilter(type, category)}>
          Filter
        </button>

        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <button className="search-button" onClick={handleSearchSubmit}>
          Search
        </button>
        <button className="reload-button" onClick={handleReload}>
          Reload
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
