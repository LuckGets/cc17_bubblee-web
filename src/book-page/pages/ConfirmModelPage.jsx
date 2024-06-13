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

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import MapRenderer from "../google-maps/Map";
import { useEffect } from "react";
import carsApi from "../../axios/cars";
import reserveApi from "../../axios/reserve";
import { useNavigate } from "react-router-dom";
import CarDetails from "../components/CarDetails";

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

  const navigate = useNavigate();

  const {
    pickupLo,
    dropOffLo,
    pickupPlace,
    pickUpLatLng,
    dropOffLatLng,
    dropOffPlace,
    passengerNum,
    bagNum,
    modelId,
    pickUpTime,
    guestInfo,
    setGuestInfo,
    distance,
    setTempOrderId,
  } = useReserveContext();

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
      setAuthenGuest(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditInfo = () => setAuthenGuest(false);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !authenUser &&
        !(guestInfo.name && guestInfo.email && guestInfo.phone)
      ) {
        return console.log("Please give us your contact information");
      }

      const data = {};

      if (guestInfo.name && guestInfo.email && guestInfo.phone) {
        data.guestName = guestInfo.name;
        data.guestMail = guestInfo.email;
        data.guestPhone = guestInfo.phone;
      }

      if (authenUser) {
        data.userId = authenUser.id;
      }

      data.pickupPlace = pickupPlace;
      data.dropOffPlace = dropOffPlace;
      data.pickUpLatLng = pickUpLatLng;
      data.dropOffLatLng = dropOffLatLng;
      data.distance = distance;
      data.totalCost =
        Math.round(
          (+carDetail?.carModel.costPerKM * +distance?.split(" ")[0]) / 10
        ) * 10;
      data.passengerNum = passengerNum;
      data.bagNumber = bagNum;
      data.pickUpTime = new Date(pickUpTime);

      data.modelId = carDetail.modelId;

      const order = await reserveApi.createReserveOrder(data);
      alert("Order booked! Please proceed to transaction process.");
      console.log(order);
      setTempOrderId(order.data.id);
      navigate("/book/payment");
    } catch (err) {
      console.log(err);
    }
  };

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
          <CarDetails title="medium" />
        </div>
        <div className="w-full">
          <div className="w-full border-2 border-black mb-2">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
              <div className="h-full">
                {/* <Map
                  mapId={import.meta.env.VITE_MAPS_ID}
                  defaultCenter={{ lat: 13.746389, lng: 100.535004 }}
                  defaultZoom={11}
                  gestureHandling="greedy"
                  reuseMaps={true}
                  disableDefaultUI={true}
                ></Map> */}
                FAKE GOOGLE MAP
              </div>
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
        <Button onClick={handleOnSubmit} text="white" bg="black">
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}

export default ConfirmModelPage;
