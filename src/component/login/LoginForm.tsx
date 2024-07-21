import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/authContext";
import { useFormik } from "formik";

const LoginForm = () => {
  const { setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      handleLogin(values?.username);
    },
  });

  const handleLogin = (username) => {
    setLogin(username);
    navigate("/");
  };

  return (
    <div className="loginWrapper">
      <div>
        <div className="LoginForm">
          <h2> Login to FoodWoo </h2>
          <form
            action=""
            method="post"
            className="userform"
            onSubmit={formik?.handleSubmit}
          >
            <div className="userInput">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id=""
                value={formik.values.username}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="userInput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id=""
                value={formik.values.password}
                onChange={formik.handleChange}
              />
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
              <button type="submit" className="loginBtn">
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
