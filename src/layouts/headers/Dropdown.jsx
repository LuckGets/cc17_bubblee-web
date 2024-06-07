import React from "react";
import DropdownItem from "../../components/DropdownItem";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const navigate = useNavigate();
  const { userLogout } = useAuthenContext();

  const logout = () => {
    userLogout();
    navigate("/");
  };

  return (
    <div
      className="w-[13rem] absolute top-10 left-9 flex flex-col gap-3 whitespace-nowrap bg-black py-4 rounded-xl
    "
    >
      <DropdownItem>User profile</DropdownItem>
      <DropdownItem>History</DropdownItem>
      <DropdownItem>Book new trip</DropdownItem>
      <DropdownItem onClick={logout}>Log out</DropdownItem>
    </div>
  );
}
