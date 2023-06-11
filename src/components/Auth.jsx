import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/logres.css";

export function Login({ onLogin, registeredUsers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onLogin(user);
      alert("Login berhasil!");
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="login-container">
      <h2 className="judul">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="label-text" htmlFor="username">
            Username:
          </label>
          <input
            className="in"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label className="label-text" htmlFor="password">
            Password:
          </label>
          <input
            className="in"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="tombol">
          Login
        </button>
      </form>
      <p className="p-text">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export function Register({ onRegister, registeredUsers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newUser = { username, password };
    onRegister(newUser);
    setUsername("");
    setPassword("");
    alert("Register berhasil!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2 className="judul">Register</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="label-text" htmlFor="username">
            Username:
          </label>
          <input
            className="in"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label className="label-text" htmlFor="password">
            Password:
          </label>
          <input
            className="in"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="tombol">
          Register
        </button>
      </form>
      <p className="p-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
