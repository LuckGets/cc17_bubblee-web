import React from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import MapRenderer from "../google-maps/Map";
import Button from "../components/Button";
import BookForm from "../components/book-page/BookForm";
import useReserveContext from "../hooks/useReserveContext";
import { useNavigate } from "react-router-dom";

function BookMainPage() {
  const {
    pickUpTime,
    pickupLo,
    dropOffLo,
    setPickUpPlace,
    setDropOffPlace,
    setPickUpLatLng,
    setDropOffLatLng,
    number,
    pickUpLatLng,
    dropOffLatLng,
    setPassengerNum,
    setBagNum,
  } = useReserveContext();

  const navigate = useNavigate();

  const handleSubmitMapPage = (e) => {
    e.preventDefault();

    if (!pickUpTime) {
      return console.log("Please pick the time");
    }

    if (!pickupLo || !dropOffLo) {
      console.log("Please pick place to pickup and dropoff");
      return;
    }
    setPickUpPlace(pickupLo?.name);
    setDropOffPlace(dropOffLo?.name);
    setPickUpLatLng(
      `${pickupLo.geometry.location.lat()} ${pickupLo.geometry.location.lng()}`
    );
    setDropOffLatLng(
      `${dropOffLo.geometry.location.lat()} ${dropOffLo.geometry.location.lng()}`
    );

    if (number.adults + number.children + number.bags === 0 || !number.adults) {
      console.log("Please provide number of passenger for us.");
      return;
    }

    if (!number.adults && number.children) {
      console.log(
        "Children or kids should have parents monitored while traveling"
      );
      return;
    }

    if (number.adults && number.children) {
      setPassengerNum(number.adults + number.children);
    }

    if (number.adults && !number.children) {
      setPassengerNum(number.adults);
    }

    setBagNum(number.bags);

    navigate("/book/model");
  };

  return (
    <form className="p-16 flex flex-col items-center">
      <BookForm />
      <div className="w-full py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button onClick={handleSubmitMapPage} text="white" bg="black">
          Continue
        </Button>
      </div>
    </form>
  );
}

export default BookMainPage;
