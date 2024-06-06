import React from "react";
import { PhoneHeaderIcon } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../authentication/components/LoginForm";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex justify-between items-center w-full min-h-[4rem] bg-gray-600">
      <div className="ml-16">
        <Link role="button" to="/" className="text-3xl text-white">
          Logo
        </Link>
      </div>
      <div className="ml-14 flex">
        <div className="px-5 text-white">
          <p clas>About us</p>
        </div>
        <div className="px-5 text-white">
          <p>Services</p>
        </div>
        <div className="px-5 text-white">
          <p>Booking</p>
        </div>
        <div className="px-5 text-white">
          <p>Drive with us</p>
        </div>
      </div>
      <div className="flex text-white mr-16">
        <div role="button" onClick={() => setOpenModal(true)} className="px-3">
          Login
        </div>
        <Link role="button" to="/signup" className="px-3">
          Sign up
        </Link>
        <div className="">
          <div className="w-6 flex items-center">
            <PhoneHeaderIcon />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal width={60} onClose={() => setOpenModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default Header;
