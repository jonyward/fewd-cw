import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchNutrition from "./FetchNutrition";
import MenuContext from "./MenuContext";
import Menu from "./Menu";
import ShoppingContext from "./ShoppingContext";
import ShoppingList from "./ShopplingList";
import StarComponent from "./StarComponent";

//DisplayRecipe component is responsible for rendering all the main details of each recipe, including the name, description, catagory, 
// nutritional values and handles information being sent fro recipes into the menu and shopping list

const DisplayRecipe = ({ recipe }) => {
  const { recipeId } = useParams();
  const currentItem = recipe.filter((entry) => {
    return entry.id === recipeId;
  });

  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [selectedShoppingItems, setSelectedShoppingItems] = useState([]);

  //both functions which handle ain fuctionality for menu and shopping list

  const handleMenuClick = (e, selectedName, selectedDescription, selectedCategory, selectedNothing) => {
    let newState = [...selectedMenuItems, selectedName, selectedDescription, selectedCategory, selectedNothing];
    setSelectedMenuItems(newState);
    console.log(selectedMenuItems);
  };

  const handleShoppingClick = (e, selectedItem) => {
    let newState = [...selectedShoppingItems, selectedItem];
    setSelectedShoppingItems(newState);
    console.log(selectedShoppingItems);
  };

  const { name, category, description, steps, nothing} = currentItem[0];
  const ingredients = currentItem[0].ingredients;

  // Main html returned at the end of the component. 
  // Starts by rendering the recipe details and at the end renders nutritional data as well as the menu and shopping list

  return (
    <>
    <div class="container">
    <div class="details">
      <h2>Recipe Name: {name}</h2><button class="addMenu" onClick={(e) => handleMenuClick(e, name, description, category, nothing)}>Add to Menu</button>
      <p><u>Recipe Category: </u><br></br>{category}</p>
      <p><u>Description: </u><br></br>{description}</p>
      <p><u>Steps: </u><br></br>{steps}</p>

      <p><u>Recipe Ingredients: </u></p>
      <ul>
        {ingredients.map((ingredients) => (
          <li key={ingredients.id} onClick={(e) => handleShoppingClick(e, ingredients)}>
            {ingredients}
          </li>
        ))}
      </ul>
      <p><u>Nutritional information</u></p>
      <FetchNutrition query={name} />
      <br>
      </br>
      <p><u>Recipe Rating</u></p>
      <StarComponent />
    </div>
      <MenuContext.Provider value={[selectedMenuItems, setSelectedMenuItems]}>
      <div class="menu">
        <Menu />
      </div>
      </MenuContext.Provider>
      <ShoppingContext.Provider value={[selectedShoppingItems, setSelectedShoppingItems]}>
      <div class="shopping">
        <ShoppingList />
      </div>
      </ShoppingContext.Provider>
    </div>
    </>
  );
};

export default DisplayRecipe;