import React from "react";
import { Link, Outlet } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <>
      <h2>Recipes</h2>
      <button><Link to="/">Reset Recipes</Link></button>
      <ul>
        {recipe.map((recipe) => (
          <li key={recipe.id}>
            <Link to={recipe.id}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
 
export default Recipe;