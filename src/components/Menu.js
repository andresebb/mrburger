import React, { useState } from "react";
import "../styles/menu.css";
import bag from "../images/shopping-bag.svg";
import { Link } from "gatsby";
import Image from "./Image";
import MenuList from "./MenuList";

const Menu = ({ menu }) => {
  const [btn, setBtn] = useState("btn-amarillo-menu");
  const [btnFeo, setBtnFeo] = useState("btn-vacio-menu");

  const handleBtn = () => {
    setBtn("btn-vacio-menu");
    setBtnFeo("btn-amarillo-menu");
  };

  const handleBtnDos = () => {
    setBtnFeo("btn-vacio-menu");
    setBtn("btn-amarillo-menu");
  };

  const handleMenu = (e) => {
    const menus = document.querySelectorAll(".vacio");

    menus.forEach((item) => {
      if (item.classList.contains("rojo")) {
        item.classList.remove("rojo");
      }
    });

    e.target.classList.toggle("rojo");
  };

  return (
    <section className="Menu p-4">
      <div className="mb-4 d-flex justify-content-between">
        <h2 className="menu-title">Menu</h2>
        <div className="d-flex">
          <button onClick={() => handleBtnDos()} className={btn}>
            All products
          </button>
          <button onClick={() => handleBtn()} className={btnFeo}>
            For Delivery
          </button>
        </div>
      </div>
      <ul className="list">
        <button onClick={(e) => handleMenu(e)} className="vacio rojo">
          Burgers
        </button>
        <button onClick={(e) => handleMenu(e)} className="vacio">
          Burgers
        </button>
        <button onClick={(e) => handleMenu(e)} className="vacio">
          Burgers
        </button>
        <div className="loco"></div>
      </ul>
      <div className="menu-container">
        {menu.map(({ node }) => {
          return (
            <div className="burger-container">
              <Link to={`/${node.nombre}`}>
                <div className="img-container">
                  <Image name="bigMac"></Image>
                </div>
              </Link>
              <div className="burger-details">
                <h6 className="burger-name">{node.nombre}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="burger-price mb-0">${node.precio}</p>
                  <div className="bagte">
                    <img className="bag" src={bag} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
