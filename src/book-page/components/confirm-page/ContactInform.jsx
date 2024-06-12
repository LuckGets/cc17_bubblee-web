import React from "react";
import Input from "../../../components/Input";
import { useState } from "react";
import Button from "../Button";

function ContactInform({ error, guestInfo, setGuestInfo, handleSubmit }) {
  return (
    <div className="p-3 border-2 border-black rounded-lg">
      <h1 className="text-3xl">Contact Information</h1>
      <p className="text-gray-400">
        Please give us some information to know you!
      </p>
      <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-5">
        <div className="flex gap-3">
          <p>Name :</p>
          <Input
            name="name"
            value={guestInfo.name}
            onChange={setGuestInfo}
            placeholder="Brian Clark"
            p="0"
          />
        </div>
        <small className="text-red-400">
          {guestInfo.name ? error.name : "*This field is required"}
        </small>
        <div className="flex gap-3">
          <p>Email :</p>
          <Input
            name="email"
            value={guestInfo.email}
            onChange={setGuestInfo}
            placeholder="brain@gmail.com"
            p="0"
          />
        </div>
        <small className="text-red-400">
          {guestInfo.email ? error.email : "*This field is required"}
        </small>
        <div className="flex gap-3">
          <p>Phone :</p>
          <Input
            name="phone"
            value={guestInfo.phone}
            onChange={setGuestInfo}
            placeholder="0112345467"
            p="0"
          />
        </div>
        <small className="text-red-400">
          {guestInfo.phone ? error.phone : "This field is required"}
        </small>
        <div className="w-1/3">
          <button
            className="bg-bubblee-orange flex justify-center items-center px-6 py-3  rounded-2xl text-white"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactInform;
