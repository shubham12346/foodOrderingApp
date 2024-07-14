import React from "react";
import Logo from "../assest/logo1.jpg";

const Header = () => {
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
      </div>
    </nav>
  );
};

export default Header;
