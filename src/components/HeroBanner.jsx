import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import "../styles/navbar.css";
import gambars from "../images/gambars.png";

function HeroBanner() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <section id="home">
      <Container>
        <Row>
          <div className={`home-text ${showText ? "show" : ""}`}>
            <div className="section-text__subtitle">Explore your calories</div>
            <div className="section-text__title-big">
              Get your healthy life with Healthy Balance
            </div>
            <div className="section-text__body">
              Find your food easier. Control your calories, find the recipes and
              be healthier. By this website, you will get your{" "}
              <b>
                <i>Healthy Balance</i>
              </b>{" "}
              Life.
            </div>
          </div>

          <div className="section-image">
            <img src={gambars} alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
