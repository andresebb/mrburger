//Creando el contexto
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agregar al carrito
  const addToCart = (element) => {
    setCart([...cart, element]);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
