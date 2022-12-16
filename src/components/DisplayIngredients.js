import React from "react";
import { useParams } from "react-router-dom";

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
          <li key={ingredients.name}>
            {ingredients.name}: {ingredients.ammount}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayIngredients;