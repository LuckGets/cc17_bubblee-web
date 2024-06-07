import React from "react";
import { Link } from "react-router-dom";

function BookSubHeader() {
  return (
    <div className="min-h-[8rem] flex flex-col justify-between items-center">
      <div></div>
      <div>
        <p className="text-red-500">
          For Reservation less than 24 hours. Please CALL 011-111-1111 to make
          your reservation.
        </p>
      </div>
      <div className="flex w-full justify-center gap-20 py-2">
        <Link>Book Page</Link>
        <Link>Manage reservation</Link>
      </div>
    </div>
  );
}

export default BookSubHeader;
