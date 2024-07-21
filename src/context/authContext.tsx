import React, { useState, createContext } from "react";

const initialState = {
  username: "",
  isLoggedIn: false,
  roles: null,
  actions: [],
  loginError: false,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = (props) => {
  const [state, setState] = useState(initialState);
  const setLogin = (username) => {
    setState((prev) => ({ ...prev, isLoggedIn: true, username: username }));
  };
  const setLogout = () => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
    window.location.href = "/login";
  };
  console.log("useState", useState);
  return (
    <AuthContext.Provider value={{ state, setLogin, setLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
