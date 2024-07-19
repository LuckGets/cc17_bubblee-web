import { useState } from "react";
import reserveApi from "../../../axios/reserve";
import useReserveContext from "../../hooks/useReserveContext";
import InputTime from "./InputTime";
import CounterPart from "./CounterPart";
import MapRenderer from "../../google-maps/Map";
import PlaceAutoComplete from "../../google-maps/PlaceAutoComplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import { MapMarker } from "../../../assets/icons/icons";
import { useEffect } from "react";
import convertISOtoLocal from "../../../utils/convertISOtoLocal";
import formatDateTime from "../../../utils/formatDateTime";
import GoogleContextProvider from "../../context/GoogleContext";

const nowDate = Date.now() + 86400000;
const date = new Date(nowDate);
const dateString = date.toISOString().split(".")[0].slice(0, 16);

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};
function BookForm() {
  const {
    pickupLo,
    setPickUpLo,
    dropOffLo,
    setDropOffLo,
    pickUpTime,
    number,
    setPickUpTime,
    setNumber,
    tempOrderId,
    setPickUpPlace,
    pickupPlace,
    setModelId,
    dropOffPlace,
    setDropOffPlace,
    setDistance,
    setPickUpLatLng,
    setDropOffLatLng,
    setDuration,
  } = useReserveContext();

  useEffect(() => {
    if (pickupLo || dropOffLo || pickUpTime || pickUpTime || number) {
      setPickUpLo(null);
      setDropOffLo(null);
      setPickUpTime("");
      setNumber(INIT_NUMBER);
    }
  }, []);

  const fetchOrder = async () => {
    try {
      if (!tempOrderId) return;
      const { data } = await reserveApi.findReserveOrderDetails({
        id: tempOrderId,
      });
      const formattedDate = formatDateTime(data.pickUpTime);
      setPickUpPlace(data.pickupPlace);
      setPickUpTime(formattedDate);
      setNumber({
        adults: data.passengerNum,
        bags: data.bagNumber,
        children: 0,
      });
      setModelId(data.modelId);
      setDropOffPlace(data.dropOffPlace);
      setPickUpLatLng(data.pickUpLatLng);
      setDropOffLatLng(data.dropOffLatLng);
      setDuration(data.duration);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="flex justify-between gap-2 ">
      <div className="flex flex-col justify-between ">
        <div className="px-5">
          <InputTime date={pickUpTime} min={dateString} />
        </div>
        <div className="flex flex-col gap-2 bg-gray-200 p-5 my-5 w-full rounded-lg">
          <h1>Location :</h1>
          <div className="flex items-center bg-white px-5 rounded-lg">
            <h1 className="text-md text-gray-500 pr-3 w-2/12">Pick up :</h1>
            <div className="w-3">
              <MapMarker />
            </div>
            <PlaceAutoComplete
              onPlaceSelect={setPickUpLo}
              value={pickupLo?.formatted_address}
              placeholder={pickupPlace || "Search a location"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5 my-5 bg-gray-200 w-full rounded-lg">
          <h1 className="text-lg">Location :</h1>
          <div className="flex items-center px-5 bg-white border-black">
            <h1 className="text-md text-gray-500 pr-3 w-2/12">Drop Off :</h1>
            <div className="w-3">
              <MapMarker />
            </div>
            <PlaceAutoComplete
              onPlaceSelect={setDropOffLo}
              value={dropOffLo?.formatted_address || dropOffPlace}
              placeholder={dropOffPlace || "Search a location"}
            />
          </div>
        </div>
        <CounterPart />
      </div>
      <MapRenderer />
    </div>
  );
}

export default BookForm;
