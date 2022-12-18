import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayRecipe from "./components/DisplayRecipe";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import { recipe } from "./data/data";
import NoPage from "./components/NoPage";
import "./App.css";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/recipes/" element={<Search details={recipe} />}>
          <Route path=":recipeId" element={<DisplayRecipe recipe={recipe} />} />
        </Route>
      </Route>
      <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
