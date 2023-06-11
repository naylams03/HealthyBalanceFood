import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useScrollYPosition } from "react-use-scroll-position";
import "../styles/navbar.css";

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const stickeyTrigger = window.innerHeight / 2.75;

  const handleLinkClick = (path, id) => {
    setMenuOpen(false);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path); // Use navigate function to change the page
    }
  };

  return (
    <Container>
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
          menuOpen ? " nav-open" : ""
        }`}
      >
        <div className="nav-content">
          <div className="nav-logo">Healthy Balance</div>

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <div
                  className="nav-link"
                  key={i}
                  onClick={() => handleLinkClick(link.href, link.id)}
                >
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </div>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </Container>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Banner", href: "#home", id: "home" },
    { title: "Features", href: "#features", id: "features" },
    { title: "About Us", href: "#aboutus", id: "aboutus" },
    { title: "Register", href: "/register" },
    { title: "Login", href: "/login" }
  ]
};

export default Navbar;
