import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../authentication/components/LoginForm";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import UnauthenHeader from "./headers/UnauthenHeader";
import { CircleMark, PhoneHeaderIcon } from "../assets/icons/icons";
import AuthenHeader from "./headers/AuthenHeader";

const headerState = {
  reservation: false,
  booking: false,
};

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [showHover, setShowHover] = useState(headerState);

  const onHover = (name) => setShowHover({ ...showHover, [name]: true });
  const onLeave = (name) => setShowHover({ ...showHover, [name]: false });

  const { authenUser } = useAuthenContext();
  return (
    <div className="flex justify-between items-center w-full bg-bubblee-orange min-h-[4.5rem] sticky top-0 z-10">
      <div className="ml-16">
        <Link role="button" to="/" className="text-3xl text-white">
          Logo
        </Link>
      </div>
      <div className="ml-14 flex">
        <div className="px-5 text-white">
          <p className="">About us</p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            onMouseEnter={() => onHover("reservation")}
            onMouseLeave={() => onLeave("reservation")}
            to="/reserve"
            className="px-5 text-white"
          >
            <p>Reservation</p>
          </Link>
          <div
            className={`${
              showHover["reservation"] ? "w-2" : "w-0"
            } hover:scale-110 duration-200 ease-in`}
          >
            <CircleMark />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Link
            onMouseEnter={() => onHover("booking")}
            onMouseLeave={() => onLeave("booking")}
            to="/book"
            className="px-5 text-white"
          >
            <p>Booking</p>
          </Link>
          <div
            className={`${
              showHover["booking"] ? "w-2" : "w-0"
            } hover:scale-110 duration-200 ease-in`}
          >
            <CircleMark />
          </div>
        </div>
        <Link className="px-5 text-white">
          <p>Drive with us</p>
        </Link>
      </div>
      {authenUser ? (
        <div className="flex text-white mr-16 px-10">
          <AuthenHeader user={authenUser.name} />
          <div className="border-l-white border-l-2 pl-2 w-8 flex items-center">
            <PhoneHeaderIcon />
          </div>
        </div>
      ) : (
        <div className="flex text-white mr-16">
          <UnauthenHeader onClick={() => setOpenModal(true)} />
          <div className="border-l-white border-l-2 pl-2 w-8 w-6 flex items-center">
            <PhoneHeaderIcon />
          </div>
        </div>
      )}
      {openModal && (
        <Modal width={60} onClose={() => setOpenModal(false)}>
          <LoginForm closeModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default Header;
