import React from "react";
import Button from "./Button";

function ModelDetails({ details }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Model : {details.carModel.split("_").join(" ")}</h1>
      <div className="flex justify-between">
        <p>Maximum number of passenger : {details.maxPassengerNum}</p>
        <p>Cost per kilometers : {details.costPerKM}</p>
      </div>
    </div>
  );
}

export default ModelDetails;
