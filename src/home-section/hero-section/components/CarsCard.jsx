import React from "react";
import { DollarsBank, Person } from "../../../assets/icons/icons";

function CarsCard({ details }) {
  return (
    <div
      role="button"
      className="min-w-[450px] min-h-[260px] hover:shadow-lg hover:scale-105 duration-200 ease-in-out"
    >
      <div className="max-w-[450px] max-h-[260px]">
        <img
          className="max-w-[450px] min-h-[300px] rounded-t-xl"
          src={details?.carImage[0].imagePath}
        />
      </div>
      <div className="bg-[#CDCDCB] p-10 rounded-b-xl min-h-[210px] flex flex-col justify-between gap-5">
        <h1 className="text-2xl pt-5">
          Model : {details?.carModel.split("_").join(" ")}
        </h1>
        <div className="flex justify-between gap-2">
          <div className="flex gap-3 items-center">
            <div className="w-6">
              <Person />
            </div>
            <p className="self-end">{details?.maxPassengerNum}</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8">
              <DollarsBank />
            </div>
            <p>{details?.costPerKM} THB/KM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsCard;
