import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchNutrition from "./FetchNutrition";
import MenuContext from "./MenuContext";
import Menu from "./Menu";
import ShoppingContext from "./ShoppingContext";
import ShoppingList from "./ShopplingList";
import StarComponent from "./StarComponent";

//component which is loaded when parts of the recipe component are interacted with
//this file is responsible for loading all information form the data.js file and loads information based on what recipe has been chosem
const DisplayRecipe = ({ recipe }) => {
  const { recipeId } = useParams();
  const currentItem = recipe.filter((entry) => {
    return entry.id === recipeId;
  });

  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [selectedShoppingItems, setSelectedShoppingItems] = useState([]);


  // two functions to handle functionality responsibel for adding data to the menu and shoppling list elements of the application
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


  //htnl responsible for showing full recipe details
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