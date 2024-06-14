import React from "react";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { getAccessToken } from "../authentication/localStorage/localStroage";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { authenUser } = useAuthenContext();

  if (getAccessToken()) {
    if (authenUser && authenUser.role !== "ADMIN") {
      return <Navigate to="/" />;
    }
  } else return <Navigate to="/" />;
  return <>{children}</>;
}

export default AdminRoute;
