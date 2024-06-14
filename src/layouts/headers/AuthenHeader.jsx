import React from "react";
import { UserIcon } from "../../assets/icons/icons";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

function AuthenHeader({ user }) {
  // useEffect(() => {
  //   document.getElementById("root").addEventListener(onClick)
  // })
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        role="button"
        className="flex items-center gap-2 px-4"
      >
        <div className="w-5">
          <UserIcon />
        </div>
        <div>Mx. {user?.split(" ") ? user?.split(" ")[1] : user}</div>
      </div>
      <Dropdown open={openDropdown} />
    </div>
  );
}

export default AuthenHeader;
