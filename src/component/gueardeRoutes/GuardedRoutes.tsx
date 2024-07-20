import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const GuardedRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);
  console.log(state);
  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return state?.isLoggedIn ? children : redirectToLogin();
};

export default GuardedRoutes;
