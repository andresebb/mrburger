import React, { useState, useContext } from "react";
import "../styles/menu.css";
import bag from "../images/shopping-bag.svg";
import { Link } from "gatsby";
import Image from "./Image";
import MenuList from "./MenuList";
import { CartContext } from "../context";

const Menu = ({ menu }) => {
  const [btn, setBtn] = useState("btn-amarillo-menu");
  const [btnFeo, setBtnFeo] = useState("btn-vacio-menu");
  const { estado, setEstado } = useContext(CartContext);

  const handleBtn = () => {
    setBtn("btn-vacio-menu");
    setBtnFeo("btn-amarillo-menu");
  };

  const handleBtnDos = () => {
    setBtnFeo("btn-vacio-menu");
    setBtn("btn-amarillo-menu");
  };

  const handleMenu = (e) => {
    //Cambiando el color al hacer click
    const menus = document.querySelectorAll(".vacio");

    menus.forEach((item) => {
      if (item.classList.contains("rojo")) {
        item.classList.remove("rojo");
      }
    });

    e.target.classList.toggle("rojo");

    handleState(e.target.textContent);
  };

  const handleState = (menu) => {
    if (menu === "Shakes") {
      const menuShakes = estado.all.filter((item) => {
        return item.node.side === "shake";
      });
      setEstado({ ...estado, shakes: menuShakes, burgers: [] });
    }

    if (menu === "Burgers") {
      const menuBurgers = estado.all.filter((item) => {
        return item.node.side === "burger";
      });
      setEstado({ ...estado, burgers: menuBurgers, shakes: [] });
    }
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
          Shakes
        </button>
        <button onClick={(e) => handleMenu(e)} className="vacio">
          Drinks
        </button>
        <div className="loco"></div>
      </ul>
      <div className="menu-container">
        <MenuList menu={menu} />
      </div>
    </section>
  );
};

export default Menu;
