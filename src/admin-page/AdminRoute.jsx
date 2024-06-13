import React from "react";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { getAccessToken } from "../authentication/localStorage/localStroage";
import userApi from "../axios/user";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { authenUser } = useAuthenContext();
  if (authenUser) {
    if (authenUser.role === "ADMIN") {
      return <Navigate to="/admin" />;
    }
  }

  if (!authenUser) {
    const execute = async () => {
      if (getAccessToken()) {
        const data = await userApi.getUser();
        if (data.role === "ADMIN") {
          return <Navigate to="/admin" />;
        }
      } else if (data.role === "USER") {
        return <Navigate to="/" />;
      }
    };
    execute();
  }

  return <div>{children}</div>;
}

export default AdminRoute;
