import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function Menu() {
  const [order] = useContext(MenuContext);

  return (
    <div>
      <h2>Menu</h2>
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
