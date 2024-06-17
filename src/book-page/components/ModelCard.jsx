import React from "react";
import vanImage from "../../assets/images/van.jpg";
import sideVan from "../../assets/images/side-van.jpg";
import inside from "../../assets/images/inside.jpg";
import chair from "../../assets/images/chair.jpg";
import CarImageCard from "./CarImageCard";
import useBookContext from "../hooks/useBookContext";
import { useEffect } from "react";
import { useState } from "react";

function ModelCard({ src, carImg, openDetails, id }) {
  return (
    <div className="min-w-[30rem] max-h-[20rem] p-5">
      <img className="object-cover bg-no-repeat w-full h-full" src={src} />
      {/* <div className="grid grid-cols-3 gap-2">
        {openDetails[id] &&
          carImg?.map((item) => <CarImageCard src={item.imagePath} />)}
      </div> */}
    </div>
  );
}

export default ModelCard;
