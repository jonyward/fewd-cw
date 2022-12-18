import React, { useState } from "react";
import Recipe from "./Recipe";

function Search(params) {
    const details = params.details;
    const [searchField, setSearchField] = useState("");

    const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div class="recipePage">
          <div class="searchBar">
            <h1>Recipies</h1>
            <p class="submitP">Search for all available recipes, including any ingredients used in any of our recipes.</p><br></br>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <br></br>
          <br></br>
          <Recipe recipe={filtered} />
      </div>
  );
}
export default Search;