import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context";
import { Link } from "gatsby";
import "../styles/Cart.css";
import removeIcon from "../images/remove.svg";
import { loadStripe } from "@stripe/stripe-js";
import Back from "./back";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [stripe, setStripe] = useState();

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.precio * current.quantity, 0)
    );
  };

  useEffect(() => {
    getTotal();
    setStripe(
      window.Stripe(
        "pk_test_51HTcrZHu94wrZKIKzR0OEW1lIydXOEN0tpCsixuceKg3cEMtmCkxk6hIetcf63avXEiq4mn8pXtuOpJLs8uef6rm00tGcDL9W5"
      )
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let prod = cart.map(({ stripe, quantity }) => ({
      price: stripe,
      quantity: quantity,
    }));

    const { error } = await stripe.redirectToCheckout({
      lineItems: prod,
      mode: "payment",
      successUrl: "https://mrburger.netlify.app/success",
      cancelUrl: "https://mrburger.netlify.app/fail",
    });
    if (error) {
      throw error;
    }
  };

  //Removiendo item del carrito

  const handleRemove = (e) => {
    cart.find((item) => item.nombre === e.nombre);

    //Quitandolo del dom
    e.target.parentElement.parentElement.remove();
    console.log(cart);
  };

  return (
    <>
      <div className="bag">
        <Back />
        <div className="title-container">
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
                      <img
                        className="product-img"
                        src={product.imagen}
                        alt=""
                      />
                      <p>{product.nombre}</p>
                    </div>
                    <p className="center">{product.quantity}</p>
                    <p className="center">{product.precio}</p>
                    <button className="boton-feo" onClick={handleRemove}>
                      <img className="remove-icon" src={removeIcon} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bag-taxes">
            <input
              className="tax-input"
              type="text"
              placeholder="Enter a code"
            />
            <div className="tax-item">
              <p>Items Subtotal:</p>
              <span>$ {total - 2.5}</span>
            </div>
            <div className="tax-item">
              <p>Delivery Fee:</p>
              <span>$ 1</span>
            </div>
            <div className="tax-item">
              <p>Tax and fees:</p>
              <span>$ 2.50</span>
            </div>
            <div className="tax-item mayor">
              <p>Total:</p>
              <span>$ {total + 1}</span>
            </div>
            <button onClick={handleSubmit} className="btn-checkout">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
