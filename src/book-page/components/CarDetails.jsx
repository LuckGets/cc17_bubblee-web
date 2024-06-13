import React from "react";
import { useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";
import carsApi from "../../axios/cars";

const textMap = {
  small: "text-md",
  medium: "text-lg",
  big: "text-xl",
  large: "text-3xl",
};

function CarDetails({ text, title }) {
  const {
    modelId,
    pickupPlace,
    dropOffPlace,
    passengerNum,
    bagNum,
    distance,
    pickUpTime,
  } = useReserveContext();

  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const { data } = await carsApi.getMainImageByCarId(+modelId);
        setCarDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCarData();
  }, []);

  return (
    <div className="h-full flex gap-3">
      <div className="w-full flex flex-col w-3/4 gap-3">
        <h1 className={`${textMap[title]}`}>
          Car Model : {carDetail?.carModel.carModel.split("_").join(" ")}
        </h1>
        <p className={`${textMap[text]}`}>From : {pickupPlace}</p>
        <p className={`${textMap[text]}`}>Passengers : {passengerNum}</p>
        <p className={`${textMap[text]}`}>
          {carDetail?.carModel.costPerKM} THB/KM{" "}
        </p>
        <p className={`${textMap[text]}`}>
          Pick-up date :{" "}
          {pickUpTime?.split("T")[0].split("-").reverse().join("/")}
        </p>
      </div>
      <div className="w-full flex flex-col w-3/4 gap-3">
        <p className={`${textMap[title]} text-transparent`}>spacer</p>
        <p className={`${textMap[text]}`}>To : {dropOffPlace}</p>
        <p className={`${textMap[text]}`}>Number of bags : {bagNum}</p>
        <p className={`${textMap[text]}`}>
          Total price :
          <span className="px-2 text-3xl">
            {Math.round(
              (+carDetail?.carModel.costPerKM * +distance?.split(" ")[0]) / 10
            ) * 10}{" "}
          </span>
          THB
        </p>
        <p className={`${textMap[text]}`}>
          Pick-up time :{" "}
          {`${pickUpTime?.split("T")[1].split(".")[0].split(":")[0]}:${
            pickUpTime.split("T")[1].split(".")[0].split(":")[1]
          }`}
        </p>
      </div>
    </div>
  );
}

export default CarDetails;
