import React from "react";
import { Link, Outlet } from "react-router-dom";

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
      </div>  
      <Outlet />
    </>
  );
};
 
export default Recipe;