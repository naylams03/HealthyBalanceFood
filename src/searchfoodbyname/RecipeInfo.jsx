import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const RecipeInfo = () => {
  const [item, setItem] = useState();
  const { MealId } = useParams();

  useEffect(() => {
    if (MealId !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.meals[0]);
        });
    }
  }, [MealId]);

  if (!item) {
    return (
      <div className="teksLoading">
        <div className="loadingAnimation"></div>
      </div>
    );
  }

  return (
    <div className="background-food">
      {item && (
        <div className="content">
          <Link to="/">
            <FaHome className="back-icon" />
          </Link>
          <img src={item.strMealThumb} alt="" />
          <div className="inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category {item.strCategory}</h3>
          </div>
          <div className="recipe-details">
            <div className="ingredients text-center">
              <h2>Ingredients</h2>
              <br />
              {Object.entries(item)
                .filter(
                  ([key, value]) => key.startsWith("strIngredient") && value
                )
                .map(([key, value]) => (
                  <h4 key={key}>
                    - {value}: {item[`strMeasure${key.slice(-1)}`]}
                  </h4>
                ))}
            </div>

            <div className="instructions">
              <h2>Instruction</h2>
              <br />
              <h4>{item.strInstructions}</h4>
            </div>
            <div className="video">
              <iframe
                src={`https://www.youtube.com/embed/${item.strYoutube.slice(
                  -11
                )}`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
