import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ReserveContext = createContext();

function ReserveContextProvider({ children }) {
  const [pickUpLatLng, setPickUpLatLng] = useState(null);
  const [dropOffLatLng, setDropOffLatLng] = useState(null);

  const [pickupPlace, setPickUpPlace] = useState(null);
  const [dropOffPlace, setDropOffPlace] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [distance, setDistance] = useState(null);

  const [passengerNum, setPassengerNum] = useState(0);
  const [bagNum, setBagNum] = useState(0);

  const [pickUpTime, setPickUpTime] = useState(null);
  const [dropOffTime, setDropOffTime] = useState(null);

  const sharedValue = {
    pickUpTime,
    setPickUpTime,
    dropOffTime,
    setDropOffTime,
    pickupPlace,
    setPickUpPlace,
    dropOffPlace,
    setDropOffPlace,
  };

  return (
    <ReserveContext.Provider value={sharedValue}>
      {children}
    </ReserveContext.Provider>
  );
}

export default ReserveContextProvider;
