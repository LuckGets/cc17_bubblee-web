import { useState } from "react";

import useReserveContext from "../../hooks/useReserveContext";
import InputTime from "./InputTime";
import CounterPart from "./CounterPart";
import MapRenderer from "../../google-maps/Map";
import PlaceAutoComplete from "../../google-maps/PlaceAutoComplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import { MapMarker } from "../../../assets/icons/icons";
import { useEffect } from "react";

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
  } = useReserveContext();

  useEffect(() => {
    if (pickupLo || dropOffLo || pickUpTime || pickUpTime || number) {
      setPickUpLo(null);
      setDropOffLo(null);
      setPickUpTime("");
      setNumber(INIT_NUMBER);
    }
  }, []);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <div className="flex justify-between gap-2 ">
        <div className="flex flex-col justify-between ">
          <div className="px-5">
            <InputTime min={dateString} />
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
                placeholder="Search a location"
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
                placeholder="Search a location"
                onPlaceSelect={setDropOffLo}
                value={dropOffLo?.formatted_address}
              />
            </div>
          </div>
          <CounterPart />
        </div>
        <MapRenderer pickup={pickupLo} dropoff={dropOffLo} />
      </div>
    </APIProvider>
  );
}

export default BookForm;
