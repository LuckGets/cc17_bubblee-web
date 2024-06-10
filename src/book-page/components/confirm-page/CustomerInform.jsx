import React from "react";
import useAuthenContext from "../../../authentication/hooks/useAuthenContext";
import { useState } from "react";

function CustomerInform({ guestInfo, handleEditInfo }) {
  const { authenUser } = useAuthenContext();
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(true);
  const onLeave = () => setHover(false);

  return (
    <div
      onClick={handleEditInfo}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="rounded-lg flex flex-col gap-3 p-5 w-full bg-gray-200 hover:brightness-95"
      role="button"
    >
      <h1 className="text-3xl">Customer Information</h1>
      <p className="text-xl">Name : Mx. {authenUser?.name || guestInfo.name}</p>
      <p className="text-xl">Email : {authenUser?.email || guestInfo.email}</p>
      <p className="text-xl">Phone : {authenUser?.phone || guestInfo.phone}</p>
      {hover ? (
        <small className="text-blue-400">
          Change contact information ? CLICK
        </small>
      ) : (
        <small className="text-gray-200">spacer</small>
      )}
    </div>
  );
}

export default CustomerInform;
