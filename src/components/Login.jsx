import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    navigate("/");
  };
  return (
    <>
      {user.username == undefined && (
        <form
          onSubmit={handleSubmit}
          className="container m-8 flex flex-col items-center justify-center gap-4"
        >
          <div className="form-control">
            <input
              type="text"
              className="text-l border-1 p-1 rounded-sm border-gray-900 outline-gray-900"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="text-l border-1 p-1 rounded-sm border-gray-900 outline-gray-900"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <button
              className="bg-red-500 text-amber-50 py-2 px-4 rounded-sm"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
