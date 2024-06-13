import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import reserveApi from "../../axios/reserve";

export const ReserveContext = createContext();

const INIT_GUEST = {
  name: "",
  email: "",
  phone: "",
};

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function ReserveContextProvider({ children }) {
  const [number, setNumber] = useState(INIT_NUMBER);

  const [pickupLo, setPickUpLo] = useState(null);
  const [dropOffLo, setDropOffLo] = useState(null);

  const [pickUpLatLng, setPickUpLatLng] = useState(null);
  const [dropOffLatLng, setDropOffLatLng] = useState(null);

  const [pickupPlace, setPickUpPlace] = useState(null);
  const [dropOffPlace, setDropOffPlace] = useState(null);

  const [modelId, setModelId] = useState(null);

  const [guestInfo, setGuestInfo] = useState(INIT_GUEST);

  const [distance, setDistance] = useState(null);

  const [passengerNum, setPassengerNum] = useState(0);
  const [bagNum, setBagNum] = useState(0);

  const [tempOrderId, setTempOrderId] = useState(null);

  const [pickUpTime, setPickUpTime] = useState(null);
  const [isRoundTrip, setIsRoundTrip] = useState(null);

  const fetchOrderDetail = async () => {
    try {
      if (!tempOrderId) return;
      const { data } = await reserveApi.findReserveOrderDetails({
        id: tempOrderId,
      });
      setTempOrderId(null);
      console.log(data);

      setNumber({ ...number, bags: data.bagNumber });
      setPickUpTime(data.pickUpTime);
      setIsRoundTrip(data.isRoundTrip);
      setModelId(modelId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, [tempOrderId]);

  const sharedValue = {
    pickUpTime,
    setPickUpTime,
    pickupPlace,
    setPickUpPlace,
    pickUpLatLng,
    setPickUpLatLng,
    dropOffLatLng,
    setDropOffLatLng,
    dropOffPlace,
    setDropOffPlace,
    number,
    setNumber,
    pickupLo,
    setPickUpLo,
    dropOffLo,
    setDropOffLo,
    passengerNum,
    setPassengerNum,
    bagNum,
    setBagNum,
    setModelId,
    modelId,
    guestInfo,
    setGuestInfo,
    distance,
    setDistance,
    tempOrderId,
    setTempOrderId,
    isRoundTrip,
    setIsRoundTrip,
  };

  return (
    <ReserveContext.Provider value={sharedValue}>
      {children}
    </ReserveContext.Provider>
  );
}

export default ReserveContextProvider;
