import React from "react";
import { Link } from "gatsby";
import backIcon from "../images/previous.svg";

const back = () => {
  return (
    <div>
      <Link className="back-button" to="/">
        <img width="15px" src={backIcon} alt="" />
        <p className="back-prop">Back to Menu</p>
      </Link>
    </div>
  );
};

export default back;
