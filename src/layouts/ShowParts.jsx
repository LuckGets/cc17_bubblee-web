import React from "react";
import { useState } from "react";
import carsApi from "../axios/cars";
import { useEffect } from "react";
import CarsCard from "../home-section/hero-section/components/CarsCard";

function ShowParts() {
  const [carImage, setCarImage] = useState(null);

  const fetchCarImage = async () => {
    const { data } = await carsApi.getCarDetails();
    console.log(data);
    setCarImage(data);
  };

  useEffect(() => {
    fetchCarImage();
  }, []);

  return (
    <div className="flex gap-20 px-20 py-20 w-full bg-gray-200">
      <div className="w-full h-full mx-0 my-auto flex flex-col gap-4">
        <h1 className="text-6xl leading-relaxed">
          Clean and Comfort vans on your service
        </h1>
        <p className="text-2xl">
          Browsing from various collection of vans model to pick the one you
          like the most.
        </p>
      </div>
      <div className="flex gap-10 w-2/3">
        {carImage?.map((item) => (
          <CarsCard key={item.id} details={item} />
        ))}
      </div>
    </div>
  );
}

export default ShowParts;
