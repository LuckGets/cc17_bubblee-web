import React from "react";
import AdminHeader from "./layout/AdminHeader";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { Outlet } from "react-router-dom";

function AdminWrapper() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}

export default AdminWrapper;
