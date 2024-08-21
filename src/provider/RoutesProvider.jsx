import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../laout/Dashboard";
import DashboardHome from "../laout/Dashboard/DashboardHome";
import MyCart from "../laout/Dashboard/MyCart";
import User from "../laout/Dashboard/Users/User";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center flex-col gap-5">
        <h2 className="text-5xl font-bold "> 404 Page not found </h2>
        <Link to={"/"} className="btn btn-primary">
          Back to home
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/menu",
        element: <OurMenu />,
        
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },


  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/users",
        element: <User />,
      },
    ],
  },
]);

export default route;
