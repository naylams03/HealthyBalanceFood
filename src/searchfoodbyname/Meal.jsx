import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Tombol "Enter" ditekan
      searchRecipe();
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food</h1>
        <p>
          <i>For see the recipe</i>
        </p>
      </div>
      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="buttonSearch" onClick={() => searchRecipe()}>
          Search
        </button>{" "}
      </div>
      <div className="container">
        {show ? <MealItem data={item} /> : "Not Found"}
      </div>
      <div className="indexContainer">
        <h2 className="indexTitle">Search by Alphabet</h2>
        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
    </div>
  );
};

export default Meal;
