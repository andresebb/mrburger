import React, { useState, useContext, useEffect } from "react";
import bag from "../images/shopping-bag.svg";
import "../styles/menu.css";
import { Link } from "gatsby";
import Image from "./Image";
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
    return estado.burgers;
  };

  /*  console.log(getList()); */

  return (
    <>
      {getList().map(({ node }) => {
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
                <p className="burger-price mb-0">$ {node.precio}</p>
                <div className="bagte">
                  <img className="bag" src={bag} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuList;
