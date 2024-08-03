import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/about/About";
import Error from "./component/Error";
import LoginForm from "./component/login/LoginForm";
import { AuthProvider } from "./context/authContext";
import GuardedRoutes from "./component/gueardeRoutes/GuardedRoutes";
import { Provider } from "react-redux";
import AppStore from "./store/appStore";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
export const Loader = () => {
  return <div style={{ margin: "100px" }}>Loader....</div>;
};

const ContactFile = lazy(() => import("./component/Contact"));
const RestaurantIndexModule = lazy(() =>
  import("./component/restaurantDetail/RestaurantIndex")
);

const CartIndex = lazy(() => import("./component/cart/CartIndex"));

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
          <Suspense fallback={<Loader />}>
            <GuardedRoutes>
              <RestaurantIndexModule />
            </GuardedRoutes>
          </Suspense>
        ),
        errorElement: <Error />,
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
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <GuardedRoutes>
              <CartIndex />
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
  <Provider store={AppStore}>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </Provider>
);
