import React from "react";
import useAuthenContext from "./hooks/useAuthenContext";
import { getAccessToken } from "./localStorage/localStroage";
import { Navigate } from "react-router-dom";
function NavigatePolice({ children }) {
  const { authenUser } = useAuthenContext();

  if (getAccessToken()) {
    if (authenUser && authenUser.role === "ADMIN") {
      return <Navigate to="/admin" />;
    }
  }

  return <div>{children}</div>;
}

export default NavigatePolice;
