import React from "react";
import { Link, Outlet } from "react-router-dom";

// component responsibe for showing all recipes that are being held in the data.js file

const Recipe = ({ recipe }) => {

  return (
    <>
    <div class="specificheader">
    <h2>Available Recipes:</h2>
    <div class="recipes">
      <ul class="recipeList">
        {recipe.map((recipe) => (
          <li class="recipeItem" key={recipe.id}>
            <Link to={recipe.id}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      </div>
      <hr></hr>
      </div>  
      <Outlet />
    </>
  );
};
 
export default Recipe;