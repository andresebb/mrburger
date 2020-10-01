import React from "react";
import "../styles/menu.css";
import bag from "../images/shopping-bag.svg";
import { Link } from "gatsby";

const Menu = ({ menu }) => {
  return (
    <section className="Menu p-4">
      <div className="mb-4 d-flex justify-content-between">
        <h2>Menu</h2>
        <div className="d-flex">
          <button>All products</button>
          <button>For Delivery</button>
        </div>
      </div>
      <ul className="list">
        <a className="active" href="">
          Burgers
        </a>
        <a className="" href="">
          Beverages
        </a>
        <a className="" href="">
          Combo Meal
        </a>
        <a className="" href="">
          Chicken & Sandwiches
        </a>
        <a className="" href="">
          Salads
        </a>
        <a className="" href="">
          Dessets & shakes
        </a>
        <a className="" href="">
          Breakfast
        </a>
        <a className="" href="">
          Happy Meal
        </a>
        <a className="" href="">
          McCafe
        </a>
      </ul>
      <div className="menu-container">
        {menu.map(({ node }) => {
          return (
            <div className="burger-container">
              <Link to={`/${node.nombre}`}>
                <div className="img-container">
                  <img src={node.imagen} alt="" />
                </div>
              </Link>
              <div className="burger-details">
                <h6 className="burger-name">{node.nombre}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="burger-price mb-0">${node.precio}</p>
                  <div className="bag-container">
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
