import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="min-h-[5rem] bg-[#8C705F] px-10 flex items-center justify-around">
      <div>
        <Link
          className="text-white hover:border-b-2 hover: border-white transition duration-200 ease-in-out"
          to="/"
        >
          Home
        </Link>
      </div>
      <p className="text-[2rem] text-white">Bubblee</p>
      <div className="flex gap-5">
        <Link
          className=" hover:border-b-2 hover: border-white text-white"
          to="/book"
        >
          Book
        </Link>
        <Link
          className="text-white  hover:border-b-2 hover: border-white"
          to="/reservation"
        >
          Find your Reservation
        </Link>
      </div>
    </div>
  );
}

export default Footer;
