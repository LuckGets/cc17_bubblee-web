import React from "react";
import { PhoneHeaderIcon } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

function UnauthenHeader({ onClick }) {
  return (
    <>
      <div role="button" onClick={onClick} className="px-3">
        Login
      </div>
      <Link role="button" to="/signup" className="px-3">
        Sign up
      </Link>
      <div className=""></div>
    </>
  );
}

export default UnauthenHeader;
