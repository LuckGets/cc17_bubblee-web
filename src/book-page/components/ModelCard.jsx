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
    <div className="w-1/2 h-60">
      <img
        className="bg-center bg-contain bg-no-repeat h-full w-full"
        src={src}
      />
      <div className="grid grid-cols-3 gap-2">
        {openDetails[id] &&
          carImg?.map((item) => <CarImageCard src={item.imagePath} />)}
      </div>
    </div>
  );
}

export default ModelCard;
