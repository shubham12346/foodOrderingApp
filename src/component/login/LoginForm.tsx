import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/authContext";

const LoginForm = () => {
  const { setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin();
    navigate("/");
  };

  return (
    <div className="loginWrapper">
      <div>
        <div className="LoginForm">
          <h2> Login to FoodWoo </h2>
          <form action="" method="post" className="userform">
            <div className="userInput">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" required id="" />
            </div>
            <div className="userInput">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required id="" />
            </div>
            <div className="userInput  userInputSelect">
              <label htmlFor="role">Role</label>
              <select name="role" id="">
                <option id="" className="userOptions">
                  User
                </option>
                <option id="">Admin</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="loginBtn"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
