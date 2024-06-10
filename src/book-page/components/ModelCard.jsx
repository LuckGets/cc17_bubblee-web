import React from "react";
import vanImage from "../../assets/images/van.jpg";
import sideVan from "../../assets/images/side-van.jpg"
import inside from "../../assets/images/inside.jpg"
import chair from "../../assets/images/chair.jpg"
import CarImageCard from "./CarImageCard";

function ModelCard() {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <div className="min-w-[30rem]">
          <img className="w-full" src={vanImage} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <CarImageCard src={sideVan}/>
        <CarImageCard src={inside}/>
        <CarImageCard src={chair}/>
      </div>
    </div>
  );
}

export default ModelCard;
