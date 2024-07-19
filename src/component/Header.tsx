import React, { useState } from "react";
import Logo from "../assest/logo1.jpg";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <nav className="Header">
      <div className="logo">
        <img src={Logo} alt="" className="" />
      </div>
      <div className="nav-elementsWrapper">
        <ul className="nav-elements">
          <li className="element">Home</li>
          <li className="element">About</li>
          <li className="element">Contact</li>
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
