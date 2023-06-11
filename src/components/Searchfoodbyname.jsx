import React from "react";
import Meal from "../searchfoodbyname/Meal";
import "../styles/style.css";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "../searchfoodbyname/RecipeInfo";

function SearchFoodByName() {
  return (
    <div id="food-container">
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </div>
  );
}

export default SearchFoodByName;
