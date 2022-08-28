import React from "react";
import "./searchBar.css";
function SearchBar() {
  return (
    <div className="searchContainer">
      <div className="searchItem">
        <label className="searchLabel">Search</label>
        <select>
          <option value="">Option1</option>
          <option value="">Option2</option>
          <option value="">Option3</option>
        </select>
      </div>
      <div className="searchItem">
        <label>Contains</label>
        <select>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
      </div>
      <div className="searchItem">
        <button>Go</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default SearchBar;
