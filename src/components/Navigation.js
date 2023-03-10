import React from "react";
import { Link, Outlet } from "react-router-dom";

// component responsible for the applications navigation bar

const Navigation = () => {
  return (
    <>
      <nav class="navbar">
        <ul>
          <div class="mainLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          </div>
        </ul>
        <br></br>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;  
