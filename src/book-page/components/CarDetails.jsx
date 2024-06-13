import React from "react";
import { useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";
import carsApi from "../../axios/cars";

function CarDetails() {
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
    <div className="h-full border-2 border-black">
      <h1 className="text-3xl">
        Model : {carDetail?.carModel.carModel.split("_").join(" ")}
      </h1>
      <div className="flex justify-between w-3/4">
        <p>From : {pickupPlace}</p>
        <p>To : {dropOffPlace}</p>
      </div>
      <div className="flex justify-between w-3/4">
        <p>Passengers : {passengerNum}</p>
        <p>Number of bags : {bagNum}</p>
      </div>
      <div className="flex justify-between w-3/4">
        <p>{carDetail?.carModel.costPerKM} THB/KM </p>
        <p>
          Total price :
          {Math.round(
            (+carDetail?.carModel.costPerKM * +distance?.split(" ")[0]) / 10
          ) * 10}{" "}
          THB
        </p>
      </div>
      <div className="flex justify-between w-3/4">
        <p>Pick-up date : {pickUpTime?.split("T")[0]}</p>
        <p>Pick-up time : {pickUpTime?.split("T")[1]}</p>
      </div>
    </div>
  );
}

export default CarDetails;
