import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../component/Header";
import { AuthProvider } from "../context/AuthContext";
import { Provider } from "react-redux";
import AppStore from "../store/appStore";

test("Should test header nav bar menu is rendered ", () => {
  render(
    <Provider store={AppStore}>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </Provider>
  );

  const link = screen.getByRole("link", {
    name: /about/i,
  });

  console.log("link", link);
});
