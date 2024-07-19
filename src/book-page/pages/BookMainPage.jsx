import React from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import MapRenderer from "../google-maps/Map";
import Button from "../components/Button";
import BookForm from "../components/book-page/BookForm";
import useReserveContext from "../hooks/useReserveContext";
import { useNavigate } from "react-router-dom";
import BookNavigateButton from "../layout/BookNavigateButton";
import { useContext } from "react";

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function BookMainPage() {
  const {
    pickUpTime,
    pickupLo,
    dropOffLo,
    setPickUpLo,
    setDropOffLo,
    pickupPlace,
    dropOffPlace,
    setPickUpPlace,
    setDropOffPlace,
    setPickUpLatLng,
    setDropOffLatLng,
    number,
    setPassengerNum,
    setBagNum,
    setNumber,
    setPickUpTime,
  } = useReserveContext();

  const navigate = useNavigate();

  const handleOnCancel = () => {
    setPickUpLo(null);
    setDropOffLo(null);
    setNumber(INIT_NUMBER);
    setPickUpTime("");
  };

  const handleSubmitMapPage = async (e) => {
    e.preventDefault();
    if (pickupPlace && dropOffPlace && pickUpTime) {
      if (number.adults && number.children) {
        setPassengerNum(number.adults + number.children);
      }

      if (number.adults && !number.children) {
        setPassengerNum(number.adults);
      }

      if (pickupLo || dropOffLo) {
        if (pickupLo) {
          setPickUpLatLng(
            `${pickupLo.geometry.location.lat()} ${pickupLo.geometry.location.lng()}`
          );
          setPickUpPlace(pickupLo?.name);
        }
        if (dropOffLo) {
          setDropOffPlace(dropOffLo?.name);
          setDropOffLatLng(
            `${dropOffLo.geometry.location.lat()} ${dropOffLo.geometry.location.lng()}`
          );
        }
      }
      setBagNum(number.bags);

      return navigate("/book/model");
    }

    if (!pickUpTime) {
      return alert("Please pick the time");
    }

    if (!pickupLo || !dropOffLo) {
      alert("Please pick pickup and dropoff place");
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
      alert("Please provide number of passenger for us.");
      return;
    }

    if (!number.adults && number.children) {
      alert("Children or kids should have parents monitored while traveling");
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
    <form className="p-14 ">
      <BookForm />
      <div className="w-full py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button onClick={handleOnCancel}>Cancel</Button>
        </div>
        <Button onClick={handleSubmitMapPage} text="white" bg="primary">
          Continue
        </Button>
      </div>
    </form>
  );
}

export default BookMainPage;
