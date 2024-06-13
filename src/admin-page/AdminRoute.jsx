import React from "react";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { getAccessToken } from "../authentication/localStorage/localStroage";

function AdminRoute({ children }) {
  const { authenUser } = useAuthenContext();

  if (getAccessToken()) {
  }

  return <div>{children}</div>;
}

export default AdminRoute;
