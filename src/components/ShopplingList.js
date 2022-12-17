import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

export default function ShoppingList() {
  const [order] = useContext(ShoppingContext);

  return (
    <div>
      <h2>Shopping List</h2>
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
