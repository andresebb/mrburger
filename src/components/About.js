import React from "react";
import telefono from "../images/telefono.png";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Our Mobile App</h2>
      <div className="about-container">
        <div className="about-item uno">
          <p className="about-number">1</p>
          <p className="about-subtitle">Offers</p>
          <p className="about-text">
            Great discounts on your favourite from our menu
          </p>
        </div>
        <div className="about-item dos">
          <p className="about-number">2</p>
          <p className="about-subtitle">Food</p>
          <p className="about-text">Get nutritional on our products</p>
        </div>
        <div className="about-img-container">
          <img className="about-img" src={telefono} alt="" />
        </div>
        <div className="about-item tres">
          <p className="about-number">3</p>
          <p className="about-subtitle">Restaurantes</p>
          <p className="about-text">
            Find your nearest Mrburger restaurent here
          </p>
        </div>
        <div className="about-item cuatro">
          <p className="about-number">4</p>
          <p className="about-subtitle">News</p>
          <p className="about-text">Here you will find latest from Mrburger</p>
        </div>
      </div>
    </div>
  );
};

export default About;
