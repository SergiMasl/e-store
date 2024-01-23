import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlinePhone,
} from "react-icons/ai";
import "./Navbar.sass";

function Navbar() {
  return (
    <nav className="nav--container">
      <div className="container">
        <div className="nav--gender-btm">
          <Link className="gender-link gender-link--focus" to="/home">
            MEN
          </Link>
          <Link className="gender-link" to="/home">
            WOMEN
          </Link>
        </div>
        <div className="nav-logo">
          <Link to="/home">WEAR ME</Link>
        </div>
        <div className="nav--btm-wrap">
          <ul className="nav--btm-list">
            <li className="nav--btm">
              <Link to="/log">
                <AiOutlineUser />
              </Link>
            </li>
            <li className="nav--btm">
              <a href="#">
                <AiOutlineHeart />
                <span>0</span>
              </a>
            </li>
            <li className="nav--btm">
              <a href="#">
                <AiOutlineShoppingCart />
                <span>0</span>
              </a>
            </li>
            <li className="nav--btm">
              <a href="#">
                <AiOutlinePhone />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
