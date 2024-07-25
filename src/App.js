import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
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
const Loader = () => {
  return <div style={{ margin: "100px" }}>Loader....</div>;
};

export default Loader;
const ContactFile = lazy(() => import("./component/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: (
      <GuardedRoutes>
        <AppLayout />
      </GuardedRoutes>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <GuardedRoutes>
            <Body />
          </GuardedRoutes>
        ),
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <GuardedRoutes>
            <About />
          </GuardedRoutes>
        ),
        errorElement: <Error />,
      },
      {
        path: "/:restId",
        element: (
          <GuardedRoutes>
            <RestaurantDetail />
          </GuardedRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <GuardedRoutes>
              <ContactFile />
            </GuardedRoutes>
          </Suspense>
        ),
        errorElement: <Error />,
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
