import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

export default function ShoppingList() {
  const [order] = useContext(ShoppingContext);
  

  return (
    <div>
      <h2>Shopping List</h2>
      <p>Please click the desired ingredient on the recipe to add to shopping list.</p>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
