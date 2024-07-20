import React, { useState, createContext } from "react";

const initialState = {
  isLoggedIn: false,
  roles: null,
  actions: [],
  loginError: false,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = (props) => {
  const [state, setState] = useState(initialState);
  const setLogin = () => {
    setState((prev) => ({ ...prev, isLoggedIn: true }));
  };
  const setLogout = () => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <AuthContext.Provider value={{ state, setLogin, setLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
