import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d5d38ba7882848348eb64fa7e33f6f3f&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setRecipeDetails(data);
        setIngredients(data.extendedIngredients);
        setInstructions(data.instructions);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="articlecalories">
      <h1 className="title">{meal.title}</h1>
      <img className="gambarimg" src={imageUrl} alt="recipe" />
      <ul className="instructionsearch">
        <li>Preparation time: {meal.readyInMinutes} Minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <div className="instruction">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <div dangerouslySetInnerHTML={{ __html: instructions }} />
      </div>
    </article>
  );
}
