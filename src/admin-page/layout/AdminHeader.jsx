import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <div className="min-h-[8rem] flex justify-center items-center bg-bubblee-orange gap-32">
      <Link to="/admin/reserve" className="text-2xl text-white">
        Reservation
      </Link>
      <Link className="text-2xl text-white">Driver</Link>
    </div>
  );
}

export default AdminHeader;
