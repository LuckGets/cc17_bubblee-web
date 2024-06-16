import React from "react";
import { Link } from "react-router-dom";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const { userLogout } = useAuthenContext();

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    userLogout();
    navigate("/");
  };

  return (
    <div className="min-h-[8rem] flex justify-between items-center bg-bubblee-orange px-20">
      <div className="text-transparent">spacer</div>
      <div className="flex gap-20">
        <Link to="/admin/reservation" className="text-2xl text-white">
          Reservation
        </Link>
        <Link className="text-2xl text-white">Driver</Link>
      </div>
      <div>
        <Link onClick={handleLogout} className="text-2xl text-white">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default AdminHeader;
