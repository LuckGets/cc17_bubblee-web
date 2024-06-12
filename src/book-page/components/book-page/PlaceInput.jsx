import React from "react";
import useReserveContext from "../../hooks/useReserveContext";
import PlaceAutoComplete from "../../google-maps/PlaceAutoComplete";

export default function PlaceInput({ onPlaceSelect, title }) {
  // const { pickupPlace, setPickUpPlace, dropOffPlace, setDropOffPlace } =
  //   useReserveContext();

  return (
    <div className="bg-gray-300 my-5 p-2">
      <h1>Location :</h1>
      <div>
        <PlaceAutoComplete onPlaceSelect={onPlaceSelect} title={title} />
      </div>
    </div>
  );
}
