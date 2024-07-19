import React, { useState } from "react";
import Logo from "../assest/logo1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <nav className="Header">
      <div className="logo">
        <img src={Logo} alt="" className="" />
      </div>
      <div className="nav-elementsWrapper">
        <ul className="nav-elements">
          <Link to="/">
            <li className="element">Home</li>
          </Link>
          <Link to="/about">
            <li className="element">About </li>
          </Link>
          <Link to="/contact">
            <li className="element">Contact </li>
          </Link>
        </ul>

        <div
          onClick={() => {
            setLogin((prev) => !prev);
          }}
          className="loginButton"
        >
          {login ? <h2>Logout</h2> : <h2>Login</h2>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
