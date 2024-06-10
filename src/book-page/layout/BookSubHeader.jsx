import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function BookSubHeader() {
  const [isBookPage, setIsBookPage] = useState(true);

  return (
    <div className="min-h-[8rem] flex flex-col justify-between items-center">
      <div></div>
      <div>
        <p className="text-red-500">
          For Reservation less than 24 hours. Please CALL 011-111-1111 to make
          your reservation.
        </p>
      </div>
      <div className="flex w-full items-stretch justify-center gap-20 py-2">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-black" : "";
          }}
          to="/book"
        >
          Book Page
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-black" : "";
          }}
          to="/reserve"
        >
          Manage reservation
        </NavLink>
      </div>
    </div>
  );
}

export default BookSubHeader;
