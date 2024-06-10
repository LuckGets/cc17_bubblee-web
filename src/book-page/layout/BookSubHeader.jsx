import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function BookSubHeader() {
  const [isBookPage, setIsBookPage] = useState(true)

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
        <Link className="border-b-2 border-black" to="/book">Book Page</Link>
        <Link to="/reserve">Manage reservation</Link>
      </div>
    </div>
  );
}

export default BookSubHeader;
