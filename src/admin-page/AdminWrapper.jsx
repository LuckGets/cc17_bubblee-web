import React from "react";
import AdminHeader from "./layout/AdminHeader";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { Outlet } from "react-router-dom";

function AdminWrapper() {
  const { authenUser } = useAuthenContext();

  return (
    <div className="min-h-screen">
      <AdminHeader />
      <Outlet />
    </div>
  );
}

export default AdminWrapper;
