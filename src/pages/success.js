import React from "react";
import "../styles/Sucfail.css";
import Back from "../components/back";
const success = () => {
  return (
    <div className="sucfail">
      <Back />
      <h1>Tu compra se realizo con exito esperamos que lo disfrutes</h1>
    </div>
  );
};

export default success;
