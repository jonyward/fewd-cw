import React from "react";

// component responsible for rendering nutritional values in html form filling in {{item}} with information fetched from an external api in FetchNutrition component
const Nutrition = ({ item }) => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>Serving size:{item.serving_size_g} g</li>
        <li>Calories per serving :{item.calories}</li>
        <li>Sugar content per serving{item.sugar_g} g</li>
        <li>Total fat content per serving:{item.fat_total_g} g</li>
        <li>Saturated fat content per serving:{item.fat_saturated_g}g</li>
        <li>Protein content per serving:{item.protein_g}g</li>
        <li>Total carbohydrates per serving:{item.carbohydrates_total_g}g</li>
        <li>Fiber per serving: {item.fiber_g}g</li>
        <li>Sodium per serving:{item.sodium_mg}mg</li>
        <li>Potassium per serving:{item.potassium_mg}mg</li>
        <li>Cholesterol per serving:{item.cholesterol_mg}mg</li>
      </ul>
      <br></br>
    </div>
  );
};
export default Nutrition;