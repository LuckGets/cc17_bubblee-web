import React from "react";
import { Navigate } from "react-router-dom";
import useAuthenContext from "../hooks/useAuthenContext";
import { getAccessToken } from "../localStorage/localStroage";

function ProtectedRoute({ children }) {
  const { authenUser } = useAuthenContext();

  if (!getAccessToken()) {
    alert("Please login before seeing booking history");
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

export default ProtectedRoute;
