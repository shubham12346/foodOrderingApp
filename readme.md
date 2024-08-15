- Project Live : https://shubham12346.github.io/foodOrderingApp.github.io/

# Components

1.  Header

- Logo
- Nav Items

2. Body

- Search
- Restaurant container
  - Restaurant Card

3. Footer

- Copyright
- Links
- Address
- Contact

# what is config driven UI

- UI is basically driven by data from backend or configs
- suppose you want to show background color blue in some city and another city yellow ,this cn be done config driven ui

# A good senior engineer is very good in data layer and ui layer engineer

# when we say react is fast

- React is fast in dom manipulation adn efficient manipulation

# React super powerful variables which updates the ui state is react hook

# What is Hook ?

- A normal js function given by react, that functions is a utility functions given by react hooks (written by meta developers )

# There are multiple react hooks

(most important hooks)

1. useState() - super powerful state
2. useEffect()

How to create a state variable

# whenever a state variable is changed the react will re render the component

# How react works behind the scene

- React uses reconciliation algorithm which is also know as React Fibre

# why we use state variable ? why can't we use local variable ?

# why do have even useState

- with the help of useState react only make change on the dome which elements are changed

# useEffect

- If no dependency it will be called on every render
- In [] empty array dependency it will be called on initial render (just once)
- It will be called each time dependency array is changed

# Creating Routing

- Using React router dom
- createBrowserRouter - for configuring routing

```
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:"/about,
    element:"<About/>
  }
])
```

- RouterProvider - provide route configuration to react-router-dom file

```
root.render(<RouterProvider router ={appRouter}/>);

```

# Error Path in route handling

- We can create an error element and pass to errorElement in route configuration

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
]);
```

- to get detail about the path error
- react-router provider a hooks known as useRouterError

```
import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return <div>Error</div>;
};

export default Error;

```

# Children Routes

- How to create children route

# 2 Types Routing in web apps

- Client Side Routing
- Server Side Routing

# Client Side Routing

- we are doing client side routing ,as in react it already loads the component and api gets data if needed to show in UI via client side routing

# Server Side Routing

- make a network call , the next page comes from api call
