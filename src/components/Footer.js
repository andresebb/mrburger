import React from "react";
import logo from "../images/mcdonalds.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-img-container">
          <img width="50px" src={logo} alt="" />
          <p>c Mrburger 2020</p>
        </div>
        <div className="footer-privacity">
          <p>Privacity</p>
          <p>Terms & Conditions</p>
          <p>Accesibility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
