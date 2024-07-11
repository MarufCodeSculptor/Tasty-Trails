import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import route from "./provider/RoutesProvider";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
