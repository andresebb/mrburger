import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import "../styles/menuDetail.css";
import back from "../images/previous.svg";
import { CartContext } from "../context";
import Ingredientes from "./Ingredientes";

const MenuDetail = ({
  nombre,
  precio,
  imagen,
  stripe,
  ingredientes,
  probando,
}) => {
  debugger;
  const [quantity, setQuantity] = useState(1);
  const [dinero, setDinero] = useState({
    montoTotal: precio,
    montoInicial: precio,
  });

  const { addToCart, cart, setLocalStorage } = useContext(CartContext);

  const handleSubmit = () => {
    addToCart({ nombre, precio, imagen, quantity, stripe });
    setLocalStorage(cart);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
    setDinero({
      ...dinero,
      montoTotal: dinero.montoTotal + dinero.montoInicial,
    });
  };

  const handleQuit = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setDinero({
        ...dinero,
        montoTotal: dinero.montoTotal - dinero.montoInicial,
      });
    }
  };

  return (
    <div>
      <img width="12px" src={back} alt="" />
      <Link to="/">Back to Menu</Link>
      <div className="menuDetail">
        <div className="menuDetail-container">
          <div>
            <img className="burger-img" src={imagen} alt="" />
          </div>
          <div className="text-detail">
            <h1>{nombre}</h1>
            <p className="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              maxime sed voluptatibus necessitatibus dignissimos unde?
            </p>
            <div className="btn-control">
              <button onClick={handleQuit}>-</button>
              <input className="input-control" type="text" value={quantity} />
              <button onClick={handlePlus}>+</button>
            </div>
            <div className="precio-container">
              <p className="precio">${dinero.montoTotal}</p>
              <button onClick={handleSubmit} className="add">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
      <Ingredientes ingredientes={ingredientes} />
      {/* <div>
        <span className="rojito">Ingredientes</span>
        <div className="linea"></div>
        <div className="ingredientes-container">
          <div className="ingrediente">
            <img src={pan} alt="" />
            <p>Pan fresco</p>
          </div>
          <div className="ingrediente">
            <img src={huevo} alt="" />
            <p>Huevo frito</p>
          </div>
          <div className="ingrediente">
            <img src={tocineta} alt="" />
            <p>Tocineta Ahumada</p>
          </div>
          <div className="ingrediente">
            <img src={cheese} alt="" />
            <p>American Cheese</p>
          </div>
          <div className="ingrediente">
            <img src={americana} alt="" />
            <p>Salsa American</p>
          </div>
          <div className="ingrediente">
            <img src={lechuga} alt="" />
            <p>Lechuga</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MenuDetail;
