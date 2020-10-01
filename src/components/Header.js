import React, { useContext } from "react";
import logo from "../images/mcdonalds.svg";
import bag from "../images/shopping-bag.svg";
import { CartContext } from "../context";
import "../styles/Header.css";
import { Link } from "gatsby";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="">
      <nav className="container">
        <div className="row align-items-center">
          <div className="text-left col-3">
            <img width="50px" src={logo} alt="" />
          </div>
          <ul className="col mb-0">
            <div className="row">
              <div className="col text-center">Menu</div>
              <div className="col text-center">Exclusive Deals</div>
              <div className="col text-center">Coupons</div>
              <div className="col text-center font-weight-semibold">
                <p className="font-weight-bold">Restaurants</p>
              </div>
            </div>
          </ul>
          <div className="col-3 text-right">
            <Link to="/cart">
              <div className="d-flex justify-content-center">
                <img width="30px" src={bag} alt="" />
                <p className="counter">{cart.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
