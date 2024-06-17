import React from "react";
import { useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";
import carsApi from "../../axios/cars";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const textMap = {
  small: "text-md",
  medium: "text-lg",
  big: "text-xl",
  large: "text-3xl",
};

function CarDetails({ text = "big", title }) {
  const {
    modelId,
    pickupPlace,
    dropOffPlace,
    passengerNum,
    bagNum,
    distance,
    pickUpTime,
    isRoundTrip,
  } = useReserveContext();

  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const { data } = await carsApi.getMainImageByCarId(+modelId);
        setCarDetail(data);
      } catch (err) {
        console.log(err);
        return <Navigate to="/book" />;
      }
    };
    fetchCarData();
  }, []);

  return (
    <div className="h-full grid grid-cols-2 gap-10 rounded-lg border-2 border-gray-200 shadow-md">
      <h1
        className={`${textMap[title]} bg-black text-white p-3 rounded-t-lg col-span-2`}
      >
        Car Model : {carDetail?.carModel.carModel.split("_").join(" ")}
      </h1>
      <div className="p-3 flex flex-col gap-5">
        <p className={`${textMap[text]}`}>
          From : <span className="text-2xl">{pickupPlace}</span>
        </p>
        <p className={`${textMap[text]}`}>Passengers : {passengerNum}</p>
        <p className={`${textMap[text]}`}>
          Cost Per KM : {carDetail?.carModel.costPerKM} THB/KM{" "}
        </p>
        <p className={`${textMap[text]}`}>
          Pick-up date :
          {pickUpTime?.split("T")[0].split("-").reverse().join("/")}
        </p>
      </div>
      <div className="p-3 flex flex-col gap-5">
        <p className={`${textMap[text]}`}>
          To : <span className="text-2xl">{dropOffPlace}</span>
        </p>
        <p className={`${textMap[text]}`}>Number of bags : {bagNum} bags</p>
        <p className={`${textMap[text]}`}>
          Total price :
          <span className="px-2 text-3xl">
            {Math.round(
              (+carDetail?.carModel.costPerKM * +distance?.split(" ")[0]) / 10
            ) * 10}
          </span>
          THB
        </p>
        <p className={`${textMap[text]}`}>
          Pick-up time :{" "}
          {`${pickUpTime?.split("T")[1].split(".")[0].split(":")[0]}:${
            pickUpTime?.split("T")[1].split(".")[0].split(":")[1]
          }`}
        </p>
      </div>
    </div>
  );
}

export default CarDetails;
