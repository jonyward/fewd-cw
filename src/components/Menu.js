import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function Menu() {
  const [order] = useContext(MenuContext);

  return (
    <div>
      <h2>Menu</h2>
      <h3>Recipe Summary:</h3>
        {order.map((name, index) => (
          <p key={index}>
            {name}
          <br></br>
          </p>
        ))}
    </div>
  );
}
