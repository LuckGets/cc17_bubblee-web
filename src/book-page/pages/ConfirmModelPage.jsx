import React from "react";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";
import Button from "../components/Button";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import ContactInform from "../components/confirm-page/ContactInform";
import CustomerInform from "../components/confirm-page/CustomerInform";
import { useState } from "react";
import { guestSchema } from "../../validation/joi-schema/joi";
import validator from "../../validation/validator";
import userApi from "../../axios/user";
import useReserveContext from "../hooks/useReserveContext";

import { APIProvider } from "@vis.gl/react-google-maps";
import MapRenderer from "../google-maps/Map";
import { useEffect } from "react";
import carsApi from "../../axios/cars";

const INIT_ERROR = {
  name: "",
  email: "",
  phone: "",
};

function ConfirmModelPage() {
  const { authenUser } = useAuthenContext();

  const [errorGuest, setErrorGuest] = useState(INIT_ERROR);
  const [authenGuest, setAuthenGuest] = useState(false);
  const [carDetail, setCarDetail] = useState(null);

  const {
    pickupLo,
    dropOffLo,
    pickupPlace,
    dropOffPlace,
    passengerNum,
    bagNum,
    modelId,
    pickUpTime,
    guestInfo,
    setGuestInfo,
  } = useReserveContext();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const { data } = await carsApi.getMainImageByCarId(+modelId);
        console.log(data);
        setCarDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCarData();
  }, []);

  const handleChangeInput = (e) =>
    setGuestInfo({ ...guestInfo, [e.target.name]: e.target.value });

  const handleSubmitGuest = async (e) => {
    try {
      e.preventDefault();
      const error = validator(guestSchema, guestInfo);
      if (error) {
        return setErrorGuest(error);
      }
      setErrorGuest({ ...INIT_ERROR });

      const response = await userApi.findUser(guestInfo);
      if (response.data.user) {
        const { user } = response.data;
        if (user.email === guestInfo.email) {
          return setErrorGuest({
            ...errorGuest,
            email:
              "This email already have registered. If it's your email. Please login for access our service.",
          });
        }

        if (user.phone === guestInfo.phone) {
          return setErrorGuest({
            ...errorGuest,
            phone:
              "This phone already have registered. If it's your phone. Please login for access our service.",
          });
        }
      }
      console.log("hello");
      setAuthenGuest(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditInfo = () => setAuthenGuest(false);

  return (
    <div className="p-10">
      <div className="flex justify-between gap-10">
        <div className="w-full flex flex-col justify-between gap-5">
          {authenUser ? (
            <CustomerInform handleEditInfo={handleEditInfo} />
          ) : authenGuest ? (
            <CustomerInform
              handleEditInfo={handleEditInfo}
              guestInfo={guestInfo}
            />
          ) : (
            <ContactInform
              error={errorGuest}
              handleSubmit={handleSubmitGuest}
              guestInfo={guestInfo}
              setGuestInfo={handleChangeInput}
              authenGuest={authenGuest}
            />
          )}
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
              <p>Total price :</p>
            </div>
            <div className="flex justify-between w-3/4">
              <p>Pick-up date : {pickUpTime?.split("T")[0]}</p>
              <p>Pick-up time : {pickUpTime?.split("T")[1]}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full border-2 border-black mb-2">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
              <MapRenderer pickup={pickupLo} dropoff={dropOffLo} />
            </APIProvider>
          </div>
          <div className="min-w-[28rem]">
            <img src={carDetail?.imagePath} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/payment" text="white" bg="black">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ConfirmModelPage;
