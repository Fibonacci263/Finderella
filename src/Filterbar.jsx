
//import React from "react";
import "./Filterbar.css"

// eslint-disable-next-line react/prop-types
const FilterBar = ({ onSearch, onFilter, onReload }) => {
  return (
    <div className="filter-bar">
    
      <h1>Finderella: Your Lost and Found Community</h1>
     
        
      <h2 className="feed-title">Feed</h2>
      <div className="filter-controls">
        <select className="filter-dropdown" onChange={(e) => onFilter(e.target.value, "type")}>
          
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <select className="filter-dropdown" onChange={(e) => onFilter(e.target.value, "category")}>
        
          <option value="electronics">Electronics</option>
          <option value="documents">Documents</option>
          <option value="clothing">Clothing</option>
          <option value="others">Others</option>
        </select>

        <button className="filter-button" onClick={() => onFilter()}>Filter</button>

        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />

        <button className="search-button" onClick={() => onSearch()}>Search</button>
        <button className="reload-button" onClick={onReload}>Reload</button>
      </div>
    </div>
  );
};

export default FilterBar;
