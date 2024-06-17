import React from "react";
import Button from "./Button";

function ModelDetails({ id, details, isTextShow, carModel }) {
  return (
    <div
      className={`${carModel === id ? "text-white" : ""} gap-3 flex flex-col`}
    >
      <h1 className="text-2xl">{details.carModel.split("_").join(" ")}</h1>
      <div className="flex flex-col gap-2">
        <p className="">
          Maximum number of passenger : {details.maxPassengerNum}
        </p>
        <div className=" flex justify-end mt-5">
          <h2 className=" p-2 rounded-md text-2xl">
            {details.costPerKM} THB/KM
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;
