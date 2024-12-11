// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./styles/Filterbar.css";

// eslint-disable-next-line react/prop-types
const FilterBar = ({ onSearch, onFilter, onReload }) => {
  const [type, setType] = useState("lost");
  const [category, setCategory] = useState("Electronics");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (value, filterType) => {
    if (filterType === "type") {
      setType(value);
    } else if (filterType === "category") {
      setCategory(value);
    }
    onFilter(value, filterType); // Call the parent `onFilter` function
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Call the parent `onSearch` function
  };

  const handleReload = () => {
    setSearchQuery(""); // Reset search input
    setType("lost"); // Reset type
    setCategory("Electronics"); // Reset category
    onReload(); // Trigger reload to fetch all data
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
          <option value="Jewellery">Jewellery</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <button className="reload-button" onClick={handleReload}> Reload
        </button>
          
         
      </div>
    </div>
  );
};

export default FilterBar;
