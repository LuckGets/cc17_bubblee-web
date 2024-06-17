import React from "react";
import { RightArrow } from "../../assets/icons/icons";

function DriverDetails({
  details,
  carPlate,
  onClick,
  chosenDriver,
  id,
  orderStatus,
}) {
  return (
    <div
      onClick={() => onClick(id)}
      role="button"
      className={`flex gap-5 items-center shadow-lg rounded-lg hover:shadow-2xl relative ${
        chosenDriver === id ? "bg-yellow-200" : ""
      } p-2`}
    >
      <div
        name={details?.name}
        id={details?.id}
        className="w-full h-full z-10 absolute bg-transparent"
      ></div>
      <img
        className="rounded-tl-lg rounded-bl-lg max-w-[300px]"
        src={details.image}
        alt=""
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl underline">DRIVER</h1>
        <h2 className="text-xl">Driver ID : {details?.id}</h2>
        <h3 className="text-2xl">Name : {details?.name}</h3>
        <h3 className="text-2xl">Car Plate : {carPlate}</h3>
        <div className="flex justify-between items-center gap-20">
          {orderStatus === "RESERVED" ? (
            ""
          ) : chosenDriver === id ? (
            <p className="text-3xl text-yellow-700">SELECT</p>
          ) : (
            <button className="self-start flex items-center w-full bg-blue-500 text-white text-xl p-2">
              <p>Click to Assign JOB</p>
              <div className="min-w-[2rem]">
                <RightArrow />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
