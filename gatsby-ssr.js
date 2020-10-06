import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Layout from "./src/components/Layout";
const { CartProvider } = require("./src/context");

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout>{element}</Layout>
  </CartProvider>
);
