import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import SearchFoodByCalories from "./Searchfoodbycalories";
import SearchFoodByName from "./Searchfoodbyname";
import RecipeInfo from "../searchfoodbyname/RecipeInfo";

const Home = ({ loggedInUser }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    alert("Logout berhasil!");
  };

  // Pengecekan apakah pengguna telah login
  if (!loggedInUser) {
    // Jika pengguna belum login, alihkan ke halaman login
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar1 onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<SearchFoodByName />} />
        <Route path="/search-by-calories" element={<SearchFoodByCalories />} />
        <Route path="/search-by-food/*" element={<SearchFoodByName />} />
        <Route path="/:MealId/*" element={<RecipeInfo />} />
      </Routes>
    </>
  );
};

export default Home;
