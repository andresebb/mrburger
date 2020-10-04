import React, { useState, useContext, useEffect } from "react";
import bag from "../images/shopping-bag.svg";
import "../styles/menu.css";
import { Link } from "gatsby";
import { CartContext } from "../context";

const MenuList = ({ menu }) => {
  const { estado, setEstado } = useContext(CartContext);

  useEffect(() => {
    setEstado({ ...estado, all: menu });
  }, []);

  const getList = () => {
    if (estado.shakes.length > 0) {
      return estado.shakes;
    }
    if (estado.burgers.length > 0) {
      return estado.burgers;
    }
    if (estado.drinks.length > 0) {
      return estado.drinks;
    }
    if (estado.desserts.length > 0) {
      return estado.desserts;
    }

    //Hacer que retorne por defecto solo las burgers
    const menuBurgers = estado.all.filter((item) => {
      return item.node.side === "burger";
    });

    setEstado({ ...estado, burgers: menuBurgers, shakes: [] });
    return estado.all;
  };

  /*  console.log(getList()); */

  return (
    <>
      {getList().map(({ node }) => {
        return (
          <Link to={`/${node.nombre}`}>
            <div className="burger-container">
              <div className="img-container">
                <img src={node.imagen} alt="" />
              </div>
              <div className="burger-details">
                <h6 className="burger-name">{node.nombre}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="burger-price mb-0">$ {node.precio}</p>
                  <div className="bagte">
                    <img className="bag" src={bag} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MenuList;
