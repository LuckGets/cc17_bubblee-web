import React from "react";
import vanImage from "../../assets/images/van.jpg";
import sideVan from "../../assets/images/side-van.jpg"
import inside from "../../assets/images/inside.jpg"
import chair from "../../assets/images/chair.jpg"
import CarImageCard from "./CarImageCard";
import useBookContext from "../hooks/useBookContext";
import { useEffect } from "react";

function ModelCard() {

  return (
    <div className="flex flex-col items-center ">
      <div>
        <div className="min-w-[30rem]">
          <img className="bg-center bg-no-repeat h-full w-full" src={vanImage} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <CarImageCard src={sideVan}/>
      </div>
    </div>
  );
}

export default ModelCard;
