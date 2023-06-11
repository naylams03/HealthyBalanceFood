import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar1({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { title: "Search Food By Calories", to: "/search-by-calories" },
    { title: "Search Food By Name", to: "/search-by-food" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    // Perform logout logic here
    onLogout(); // Call the onLogout prop from App.js
    navigate("/"); // Navigate to home page ("/") after logout
    alert("Logout berhasil!");
  };

  return (
    <Container>
      <div className={`nav${menuOpen ? " nav-open" : ""}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <img src="images/logo.png" alt="" />
            Healthy Balance
          </div>

          <nav className="nav-links__container">
            {links.map((link, i) => (
              <Link
                to={link.to}
                className={`nav-link${
                  location.pathname === link.to ? " active" : ""
                }`}
                key={i}
                onClick={handleLinkClick}
              >
                <div className="nav-link__text">{link.title}</div>
                <div className="nav-link__background" />
              </Link>
            ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>

          <Button
            variant="primary"
            className="tombol-logout"
            onClick={handleLogout}
          >
            <p>Logout</p>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar1;
