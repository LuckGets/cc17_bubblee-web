import React from "react";
import useAuthenContext from "../../../authentication/hooks/useAuthenContext";
import { useState } from "react";

function CustomerInform({ guestInfo, handleEditInfo, editAble = true }) {
  const { authenUser } = useAuthenContext();

  return (
    <div
      onClick={handleEditInfo}
      className="rounded-lg flex flex-col gap-3 w-full hover:shadow-xl hover:scale-95 transition duration-500 ease-in-out shadow-md"
      role="button"
    >
      <div className="text-3xl bg-black p-3 text-white rounded-t-lg">
        <h1>Customer Information</h1>
      </div>
      <p className="text-xl p-3">
        Name : Mx. {authenUser?.name || guestInfo.name}
      </p>
      <p className="text-xl p-3">
        Email : {authenUser?.email || guestInfo.email}
      </p>
      <p className="text-xl p-3">
        Phone Number: {authenUser?.phone || guestInfo.phone}
      </p>
      {editAble ? (
        <small className="text-red-400 pb-5 px-5">
          Change contact information ? CLICK
        </small>
      ) : (
        <p className="text-transparent">spacer</p>
      )}
    </div>
  );
}

export default CustomerInform;
