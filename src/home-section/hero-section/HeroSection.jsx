import React from "react";
import BookTab from "./components/BookTab";
import PlaceAutoComplete from "../../book-page/google-maps/PlaceAutoComplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import useReserveContext from "../../book-page/hooks/useReserveContext";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const { setPickUpLo, setDropOffLo } = useReserveContext();

  const navigate = useNavigate();

  const handleSubmitBook = (e) => {
    navigate("/book");
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <div className="bg-hero-pattern bg-center bg-cover relative px-32 flex flex-col justify-center min-h-[60vh]">
        <div className="pt-10">
          <h1 className="text-7xl text-white">Bubblee Van Service</h1>
          <p className="text-2xl font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            laborum.
          </p>
        </div>
        <div className="flex w-full pt-5">
          <div className="bg-white opacity-60 flex-grow border-r-2 border-gray-100 py-3 rounded-l-xl px-7">
            <label className="" htmlFor="">
              From :{" "}
            </label>
            <PlaceAutoComplete
              onPlaceSelect={setPickUpLo}
              placeholder="City or Province"
            />
          </div>
          <div className=" bg-white opacity-60 flex-grow px-7 py-3">
            <label htmlFor="">To: </label>
            <PlaceAutoComplete
              className="flex-grow"
              onPlaceSelect={setDropOffLo}
              placeholder="City or Province"
            />
          </div>
          <button
            onClick={handleSubmitBook}
            className="p-5 bg-bubblee-orange text-white rounded-tr-2xl rounded-br-2xl hover:scale-105 transition duration-700 ease-out"
          >
            Book your new Trip
          </button>
        </div>
      </div>
    </APIProvider>
  );
}

export default HeroSection;
