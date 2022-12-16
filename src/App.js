import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";

import DisplayRecipe from "./components/DisplayRecipe";
import { recipe } from "./data/data";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recipe recipe={recipe} />}>
          <Route path=":recipeId" element={<DisplayRecipe recipe={recipe} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
