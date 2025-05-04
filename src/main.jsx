import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Products from "./components/Products.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import ProductsContextProvider from "./context/ProductsContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Products /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UserContextProvider>
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  </UserContextProvider>
  // </React.StrictMode>,
);
