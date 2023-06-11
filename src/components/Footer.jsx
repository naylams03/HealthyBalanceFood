import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Healthy Food</div>
            <div className="footer-text__body">
              This website helps you to reach your calories goals by giving the
              food and the recipes for you. It's helps your life balance.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#home">Banner</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Subscribe to get latest updates for our websites.
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Coded by Beverly | Nayla | Shyandon</div>
      </div>
    </footer>
  );
}

export default Footer;
