import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchNutrition from "./FetchNutrition";
import MenuContext from "./MenuContext";
import Menu from "./Menu";
import ShoppingContext from "./ShoppingContext";
import ShoppingList from "./ShopplingList";
import StarComponent from "./StarComponent";

const DisplayRecipe = ({ recipe }) => {
  const { recipeId } = useParams();
  const currentItem = recipe.filter((entry) => {
    return entry.id === recipeId;
  });

  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [selectedShoppingItems, setSelectedShoppingItems] = useState([]);

  const handleMenuClick = (e, selectedItem) => {
    let newState = [...selectedMenuItems, selectedItem];
    setSelectedMenuItems(newState);
    console.log(selectedMenuItems);
  };

  const handleShoppingClick = (e, selectedItem) => {
    let newState = [...selectedShoppingItems, selectedItem];
    setSelectedShoppingItems(newState);
    console.log(selectedShoppingItems);
  };

  const { name, description } = currentItem[0];
  const ingredients = currentItem[0].ingredients;

  return (
    <>
    <div class="details">
      <h4>Recipe Name: {name}</h4>
      <p>{description}</p>

      <button onClick={(e) => handleMenuClick(e, name)}>Add to Menu</button>

      <p>Recipe Ingredients: </p>
      <ul>
        {ingredients.map((ingredients) => (
          <li key={ingredients.id} onClick={(e) => handleShoppingClick(e, ingredients)}>
            {ingredients}
          </li>
        ))}
      </ul>
      <p>Nutritional information</p>
      <FetchNutrition query={name} />
      <StarComponent />
    </div>
      <MenuContext.Provider value={[selectedMenuItems, setSelectedMenuItems]}>
        <Menu />
      </MenuContext.Provider>
      <ShoppingContext.Provider value={[selectedShoppingItems, setSelectedShoppingItems]}>
        <ShoppingList />
      </ShoppingContext.Provider>
    </>
  );
};

export default DisplayRecipe;