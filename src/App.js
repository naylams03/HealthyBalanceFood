import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SearchFoodByCalories from "./components/Searchfoodbycalories";
import SearchFoodByName from "./components/Searchfoodbyname";
import { Login, Register } from "./components/Auth";
import RecipeInfo from "./searchfoodbyname/RecipeInfo";
import "./styles/styles.css";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleRegister = (newUser) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              {loggedInUser ? (
                <Navbar1 onLogout={handleLogout} />
              ) : (
                <>
                  <Navbar />
                  <HeroBanner />
                  <Features />
                  <AboutUs />
                  <Footer />
                </>
              )}
              <Routes>
                <Route
                  path="/"
                  element={loggedInUser ? <SearchFoodByName /> : null}
                />
                <Route
                  path="/search-by-food/*"
                  element={<SearchFoodByName />}
                />
                <Route
                  path="/search-by-calories/*"
                  element={<SearchFoodByCalories />}
                />
                <Route path="/:MealId/*" element={<RecipeInfo />} />
              </Routes>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} registeredUsers={registeredUsers} />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              onRegister={handleRegister}
              registeredUsers={registeredUsers}
            />
          }
        />
        <Route
          path="/home"
          element={
            loggedInUser ? (
              <>
                <Navbar1 onLogout={handleLogout} />
                <Home loggedInUser={loggedInUser} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
