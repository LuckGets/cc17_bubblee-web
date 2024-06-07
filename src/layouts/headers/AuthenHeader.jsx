import React from "react";
import { UserIcon } from "../../assets/icons/icons";
import { useState } from "react";
import Dropdown from "./Dropdown";

function AuthenHeader({ user }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpenDropdown(prev => !prev)}
        role="button"
        className="flex items-center gap-2 px-4"
      >
        <div className="w-5">
          <UserIcon />
        </div>
        <div>{user}</div>
      </div>
      {openDropdown && <Dropdown />}
    </div>
  );
}

export default AuthenHeader;
