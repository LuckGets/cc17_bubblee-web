import React from "react";
import AdminHeader from "./layout/AdminHeader";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { Outlet } from "react-router-dom";

function AdminWrapper() {
  return (
    <>
      <AdminHeader />
      <div className="flex justify-center bg-gray-200 p-10">
        <Outlet />
      </div>
    </>
  );
}

export default AdminWrapper;
