import React from "react";
import { Link, Outlet } from "react-router-dom";

// component responsbile for rendering the list of recipes shown at the beginning of the application
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