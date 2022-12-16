import React from "react";
import { useParams } from "react-router-dom";
import DisplayIngredients from "./DisplayIngredients";

const DisplayRecipe = ({ recipe }) => {
  const { recipeId } = useParams();
  const currentItem = recipe.filter((entry) => {
    return entry.id === recipeId;
  });
  const { name, description } = currentItem[0];

  return (
    <>
      <h4>Recipe Name: {name}</h4>
      <p>{description}</p>

      <DisplayIngredients recipe={recipe} />
    </>
  );
};

export default DisplayRecipe;