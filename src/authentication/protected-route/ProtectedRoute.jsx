import React from "react";
import { Navigate } from "react-router-dom";
import useAuthenContext from "../hooks/useAuthenContext";
import { getAccessToken } from "../localStorage/localStroage";

function ProtectedRoute({ children }) {
  const { authenUser, setAuthenUser } = useAuthenContext();

  if (!authenUser) {
    const execute = async () => {
      if (getAccessToken()) {
        const data = await userApi.getUser();
        setAuthenUser(data);
      } else {
        alert("Please login before seeing booking history");
        return <Navigate to="/" />;
      }
    };
    execute();
  }

  return <div>{children}</div>;
}

export default ProtectedRoute;
