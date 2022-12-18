import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

export default function ShoppingList() {
  const [order] = useContext(ShoppingContext);
  
// component responsible for rendering shopping list component

  return (
    <div>
      <h2>Shopping List</h2>
      <h3>Please click the desired ingredient on the recipe to add to shopping list.</h3>
        {order.map((item, index) => (
          <p key={index}>
            {item}
          <br></br>
          </p>
        ))}
    </div>
  );
}
