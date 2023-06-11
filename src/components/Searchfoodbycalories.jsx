import React, { useState } from "react";
import MealList from "../searchfoodbycalories/MealList";
import "../styles/index.css";

function SearchFoodByCalories() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=2877cd462d39411abe2e309cb5722011&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="Searchfoodbycalories">
      <h2 className="namesearch">Search Food By Calories</h2>
      <section className="controls">
        <input
          className="control"
          type="number"
          placeholder="Calories (e.g 2000)"
          onChange={handleChange}
        />
      </section>
      <button className="buttonsearchcalories" onClick={getMealData}>
        Get Daily Meal Plan
      </button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default SearchFoodByCalories;
