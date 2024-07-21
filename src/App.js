import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/about/About";
import RestaurantDetail from "./component/RestaurantDetail";
import Error from "./component/Error";
import LoginForm from "./component/login/LoginForm";
import { AuthProvider } from "./context/authContext";
import GuardedRoutes from "./component/gueardeRoutes/GuardedRoutes";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <GuardedRoutes children={<AppLayout />} />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <GuardedRoutes children={<Body />} />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <GuardedRoutes children={<About />} />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <GuardedRoutes children={<Contact />} />,
        errorElement: <Error />,
      },
      {
        path: "/:restId",
        element: <GuardedRoutes children={<RestaurantDetail />} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={appRouter} />
  </AuthProvider>
);
