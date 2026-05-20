import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResCard from "./components/ResCard";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Offer from "./components/Offer";
import RestaurentMenu from "./components/RestaurentMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const routingConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />,  
      },
       {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path:"/menu/:resId",
        element:<RestaurentMenu/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routingConfig} />);
