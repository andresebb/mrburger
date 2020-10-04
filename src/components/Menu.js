import React, { useState, useContext } from "react";
import "../styles/menu.css";
import bag from "../images/shopping-bag.svg";
import { Link } from "gatsby";
import Image from "./Image";
import MenuList from "./MenuList";
import { CartContext } from "../context";
import Loader from "./Loader";

const Menu = ({ menu }) => {
  const [btn, setBtn] = useState("btn-amarillo-menu");
  const [btnFeo, setBtnFeo] = useState("btn-vacio-menu");
  const [loading, setLoading] = useState(false);

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

  //Cambiando el estado al hacer click en al menu
  const handleState = async (menu) => {
    try {
      setLoading(true);
      if (menu === "Shakes") {
        const menuShakes = estado.all.filter((item) => {
          return item.node.side === "shake";
        });
        setEstado({ ...estado, shakes: menuShakes, burgers: [] });
        setLoading(false);
      }

      if (menu === "Burgers") {
        const menuBurgers = estado.all.filter((item) => {
          return item.node.side === "burger";
        });
        setEstado({ ...estado, burgers: menuBurgers, shakes: [] });
        setLoading(false);
      }
      if (menu === "Drinks") {
        const menuDrinks = estado.all.filter((item) => {
          return item.node.side === "drink";
        });
        setEstado({ ...estado, drinks: menuDrinks, shakes: [], burgers: [] });
        setLoading(false);
      }
      if (menu === "Desserts") {
        const menuDesserts = estado.all.filter((item) => {
          return item.node.side === "dessert";
        });
        setEstado({
          ...estado,
          desserts: menuDesserts,
          shakes: [],
          burgers: [],
          drinks: [],
        });
      }
      console.log(loading);
    } catch (error) {}
  };

  return (
    <section className="Menu p-4">
      {loading === true ? <div>cargando</div> : <div>ya estoy listo</div>}
      <div className="mb-4 d-flex justify-content-between elindo">
        <h2 className="menu-title">Menu</h2>
        <div className="botones-container">
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
        <button onClick={(e) => handleMenu(e)} className="vacio">
          Desserts
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
