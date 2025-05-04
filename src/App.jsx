import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Products />
      <Login />
      <Profile />
    </>
  );
};

export default App;
