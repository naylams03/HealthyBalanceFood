import React from "react";
import ImgNay from "../images/nayla.jpg";
import ImgBev from "../images/bev.jpg";
import ImgSaint from "../images/saint.jpg";

function AboutUs() {
  return (
    <section id="aboutus">
      <div className="section-text">
        <div className="section-text__title-centered">About Us</div>
        <div className="service-cards">
          <div className="service-card">
            <img src={ImgNay} alt="" />
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Nayla Mutiara Salsabila B.
              </div>
              <div className="section-text__desc">
                00000075205 - Informatics <br />
                <br />
                <i>
                  "Kadang kamu harus menerima segala sesuatunya secara terpaksa
                  sebelum akhirnya kamu terbiasa."
                </i>
              </div>
              <div className="service-card__icon">
                <a href="https://instagram.com/naylamsb">
                  <ion-icon name="logo-instagram" className="logoig"></ion-icon>
                </a>
              </div>
            </div>
          </div>

          <div className="service-card active">
            <img src={ImgBev} alt="" />
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Beverly Vladislav Tan
              </div>
              <div className="section-text__desc">
                00000074964 - Informatics <br />
                <br />
                <i>
                  "Punya segalanya belum tentu punya kebahagiaan, tapi punya
                  kamu pasti bahagia."
                </i>
              </div>
              <div className="service-card__icon">
                <a href="https://instagram.com/bverly._">
                  <ion-icon name="logo-instagram" className="logoig"></ion-icon>
                </a>
              </div>
            </div>
          </div>

          <div className="service-card">
            <img src={ImgSaint} alt="" />
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Saint Christopher Shyandon
              </div>
              <div className="section-text__desc">
                00000075026 - Informatics <br />
                <br />
                <i>
                  "Menjalani hidup itu sulit tetapi dengan mindset yang baik
                  hidup menjadi lebih mudah"
                </i>
              </div>
              <div className="service-card__icon">
                <a href="https://instagram.com/saintchristopher.s">
                  <ion-icon name="logo-instagram" className="logoig"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
