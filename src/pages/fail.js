import React from "react";
import "../styles/Sucfail.css";
import Back from "../components/back";

const fail = () => {
  return (
    <div className="sucfail">
      <Back />
      <h1>Lo sentimos, no pudimos procesar tu compra</h1>
    </div>
  );
};

export default fail;
