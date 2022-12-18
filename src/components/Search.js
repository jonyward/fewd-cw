import React, { useState } from "react";
import Recipe from "./Recipe";

// component responsible for filtering out specific recipes based on the input provided into the search bar
function Search(params) {
    const details = params.details;
    const [searchField, setSearchField] = useState("");

    // the below code is resonsible for what values from data.js are used to filter out different recipes
    // values filtered are the name of the recipe, any ingredients, what category of menu the recipe falls under and any allergens related to a recipe.
    const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchField.toLowerCase()) || entry.category.toLowerCase().includes(searchField.toLowerCase()) || entry.allergens.toLowerCase().includes(searchField.toLowerCase())
  });

  return (
      <div class="recipePage">
          <div class="searchBar">
            <h1>Recipes</h1>
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