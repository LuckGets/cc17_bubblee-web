import React from "react";
import Button from "./Button";

function ModelDetails({ id, details, isTextShow }) {
  return (
    <div className="gap-3 flex flex-col">
      <h1 className="text-2xl">{details.carModel.split("_").join(" ")}</h1>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500">
          Maximum number of passenger : {details.maxPassengerNum}
        </p>
        <div className=" flex justify-end mt-5">
          <h2 className=" p-2 rounded-md text-2xl">
            {details.costPerKM} THB/KM
          </h2>
        </div>
        {isTextShow[id] ? (
          <p className="text-bubblee-orange">Click to see more details...</p>
        ) : (
          <p className="text-white">spacer</p>
        )}
      </div>
    </div>
  );
}

export default ModelDetails;
