import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context";
import { Link } from "gatsby";
import burger from "../images/cheeseBurger.png";
import "../styles/Cart.css";
import backIcon from "../images/previous.svg";
import removeIcon from "../images/remove.svg";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(cart);

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.precio * current.quantity, 0)
    );
  };

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="bag">
      <div className="title-container">
        <Link className="back-button" to="/">
          <img width="15px" src={backIcon} alt="" />
          <p className="back-prop">Back to Menu</p>
        </Link>
        <h2 className="bag-title">BAG</h2>
      </div>
      <div className="bag-container">
        <div className="bag-products">
          <div className="table">
            <p>Product List</p>
            <p className="center">Quantity</p>
            <p className="center">Unit price</p>
          </div>
          {cart.map((product) => {
            return (
              <div>
                <div className="product-detail">
                  <div className="product-name">
                    <img className="product-img" src={product.imagen} alt="" />
                    <p>{product.nombre}</p>
                  </div>
                  <p className="center">{product.quantity}</p>
                  <p className="center">{product.precio}</p>
                  <img className="remove-icon" src={removeIcon} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="bag-taxes">
    