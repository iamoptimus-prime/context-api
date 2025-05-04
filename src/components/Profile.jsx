import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>
        {user.username != undefined &&
          user.username != "" &&
          `Welcome ${user.username}`}
      </h1>
    </div>
  );
};

export default Profile;
