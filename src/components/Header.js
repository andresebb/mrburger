import React, { useContext } from "react";
import logo from "../images/mcdonalds.svg";
import bag from "../images/shopping-bag.svg";
import { CartContext } from "../context";
import "../styles/Header.css";
import { Link } from "gatsby";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav className="container">
        <div className="row align-items-center separador">
          <div className="text-left col-3">
            <Link className="" to="/">
              <img width="50px" src={logo} alt="" />
            </Link>
          </div>
          <ul className="col mb-0 titulos">
            <div className="row fuente">
              <div className="col text-center">Menu</div>
              <div className="col text-center special">Exclusive Deals</div>
              <div className="col text-center">Coupons</div>
              <div className="col text-center ">Restaurants</div>
            </div>
          </ul>
          <div className="col-3 text-right bolsita">
            <Link className="nono" to="/cart">
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
