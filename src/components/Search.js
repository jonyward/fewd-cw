import React, { useState } from "react";
import Recipe from "./Recipe";

// component responsible for rendering recipes which are held in the data.js, while also filtering recipe results based on user input

function Search(params) {
    const details = params.details;
    const [searchField, setSearchField] = useState("");

// the variables that will result in recipes being filtered are declared here, using the useState function react provides

    const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchField.toLowerCase()) || entry.category.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div class="recipePage">
          <div class="searchBar">
            <div class="recipeHeader">
            <h1>Recipes</h1>
            </div>
            <p class="submitP">Search for all available recipes, including any ingredients used in any of our of our= recipes.</p><br></br>
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