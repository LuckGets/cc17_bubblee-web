import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../authentication/components/LoginForm";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import UnauthenHeader from "./headers/UnauthenHeader";
import { PhoneHeaderIcon } from "../assets/icons/icons";
import AuthenHeader from "./headers/AuthenHeader";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const { authenUser } = useAuthenContext();
  return (
    <div className="flex justify-between items-center w-full min-h-[4rem] bg-gray-600">
      <div className="ml-16">
        <Link role="button" to="/" className="text-3xl text-white">
          Logo
        </Link>
      </div>
      <div className="ml-14 flex">
        <div className="px-5 text-white">
          <p className="">About us</p>
        </div>
        <Link to="/reserve" className="px-5 text-white">
          <p>Reservation</p>
        </Link>
        <Link to="/book" className="px-5 text-white">
          <p>Booking</p>
        </Link>
        <div className="px-5 text-white">
          <p>Drive with us</p>
        </div>
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
