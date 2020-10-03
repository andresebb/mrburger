//Creando el contexto
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [estado, setEstado] = useState({
    all: [],
    burgers: [],
    shakes: [],
  });

  const addToCart = (element) => {
    const exist = cart.find((item) => item.nombre === element.nombre);
    debugger;
    if (exist) {
      setCart(
        cart.map((item) =>
          item.nombre === exist.nombre
            ? { ...item, quantity: item.quantity + element.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, element]);
    }
  };

  //Set Local Storage
  const setLocalStorage = (api) => {
    localStorage.setItem("Mi Carrito", JSON.stringify(api));
  };

  //En value se le agrega las propiedades que se le van a proveer a toda la app
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setLocalStorage,
        estado,
        setEstado,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
