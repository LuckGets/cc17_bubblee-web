import { useState } from "react";

import useReserveContext from "../../hooks/useReserveContext";
import InputTime from "./InputTime";
import CounterPart from "./CounterPart";
import MapRenderer from "../../google-maps/Map";
import PlaceAutoComplete from "../../google-maps/PlaceAutoComplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

function BookForm() {
  const { pickupLo, setPickUpLo, dropOffLo, setDropOffLo } =
    useReserveContext();

  // useEffect(() => {
  //   if ((pickupLo, dropOffLo)) {
  //     setPickUpLo(null);
  //     setDropOffLo(null);
  //   }
  // }, []);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <InputTime />
          <div className="p-5 my-5 bg-gray-200 w-3/4">
            <h1 className="text-lg">Pick up :</h1>
            <PlaceAutoComplete onPlaceSelect={setPickUpLo} />
          </div>
          <div className="p-5 my-5 bg-gray-200 w-3/4">
            <h1 className="text-lg">Drop off :</h1>
            <PlaceAutoComplete onPlaceSelect={setDropOffLo} />
          </div>
          <div></div>
          <CounterPart />
        </div>
        <MapRenderer pickup={pickupLo} dropoff={dropOffLo} />
      </div>
    </APIProvider>
  );
}

export default BookForm;
