import React from "react";
import { Row, Container } from "react-bootstrap";
import features from "../images/features.png";

function Features() {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-image-features">
            <img src={features} width="200" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Find Food by Calories
                </div>
                <div className="section-text__desc">
                  Easier pick your one day food by calories that you want.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Search Food</div>
                <div className="section-text__desc">
                  Found the food, get the detail calories, ingredients, and the
                  tutorial at youtube.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Plan Meal</div>
                <div className="section-text__desc">
                  Plan your meal in a day, just by your calories goals.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Find Alphabet of Food
                </div>
                <div className="section-text__desc">
                  Just by pick the first letter of the food that you want, you
                  will get the full description.
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
