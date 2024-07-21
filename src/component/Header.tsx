import React, { useContext, useState } from "react";
import Logo from "../assest/logo1.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const { state, setLogout } = useContext(AuthContext);
  return (
    <nav className="Header">
      <div className="logo">
        <img src={Logo} alt="" className="" />
        {state?.isLoggedIn && <h2>{state?.username || ""}</h2>}
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
            setLogout();
          }}
          className="loginButton"
        >
          {state?.isLoggedIn ? <h2>Logout</h2> : <h2>Login</h2>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
