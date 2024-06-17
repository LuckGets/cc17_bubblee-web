import React from "react";
import { CrossMark } from "../../assets/icons/icons";
import userApi from "../../axios/user";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import { useNavigate } from "react-router-dom";

function ConfirmModal({ onClose, onClick, orderId, execute }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleOnCancelJob = async () => {
    try {
      if (!password || !confirmPassword) {
        alert("Please input the admin password.");
      }
      if (password !== confirmPassword) {
        alert("password and confirm password doesn't match.");
      }
      console.log(password);
      const { data } = await userApi.ComparePassword({ password: password });
      console.log(data);
      if (!data) {
        alert("Invalid Credentials");
      }
      const response = await reserveApi.cancelJob(orderId);
      alert(response.data.message);
      await execute();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between py-3 border-b-2 border-black">
        <h1 className="text-xl">
          Please Authenticated yourself before cancel the job
        </h1>
        <div role="button" onClick={onClose} className="w-4">
          <CrossMark />
        </div>
      </div>
      <div className="flex flex-col py-5 gap-3">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2 border-gray-300 py-2 outline-gray-600"
          placeholder="password1234"
          type="text"
          name=""
          id=""
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border-b-2 border-gray-300 py-2"
          placeholder="confirmpassword1234"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="w-full flex justify-between px-40">
        <button
          onClick={() => {
            setPassword("");
            setConfirmPassword("");
          }}
          className="py-3 px-10 hover:brightness-105 transition:brightness duration-300 ease-in rounded-full text-white bg-bubblee-orange"
        >
          Reset
        </button>
        <button
          onClick={handleOnCancelJob}
          className="p-3 px-10 hover:bg-red-800 transition:bg duration-300 ease-in rounded-full text-white bg-red-500"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
