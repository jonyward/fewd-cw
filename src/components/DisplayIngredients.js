import React from "react";
import { Link, useParams } from "react-router-dom";

const DisplayIngredients = ({ recipe }) => {
  const { recipeId } = useParams();
  const currentItem = recipe.filter((entry) => {
    return entry.id === recipeId;
  });
  const ingredients = currentItem[0].ingredients;

  return (
    <>
      <p>Ingredients</p>
      <ul>
        {ingredients.map((ingredients) => (
          (<li key={ingredients.name}>
            <Link to={ingredients.name}>{ingredients.name}: {ingredients.name}</Link>
          </li>)
        ))}
      </ul>
    </>
  );
};

export default DisplayIngredients;