import React, { useContext } from "react";
import MenuContext from "./MenuContext";


//component responsible for rendering the menu component of the application, and filling it with data previously fetched
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
