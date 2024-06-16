import React from "react";
import BookTab from "./components/BookTab";

function HeroSection() {
  return (
    <div className="bg-hero-pattern bg-center bg-cover relative px-32 flex flex-col justify-center min-h-[60vh]">
      <div className="pt-10">
        <h1 className="text-7xl text-white">Bubblee Van Service</h1>
        <p className="text-2xl font-light text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          laborum.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
