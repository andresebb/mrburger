//Creando el contexto
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [estado, setEstado] = useState({
    all: [],
    burgers: [],
    shakes: [],
    drinks: [],
    desserts: [],
  });

  const addToCart = (element) => {
    toast("new Product added", {
      type: "warning",
      autoClose: 1000,
    });

    const exist = cart.find((item) => item.nombre === element.nombre);

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
      <ToastContainer />
    </CartContext.Provider>
  );
};
