import React from "react";
import BookTab from "./components/BookTab";

function HeroSection() {
  return (
    <div className="bg-hero-pattern bg-center bg-cover px-32 flex flex-col justify-center min-h-[60vh] bg-red-100">
      <div className="pt-20">
        <h1 className="text-7xl">Bubblee Van Service</h1>
        <p className="text-2xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          laborum.
        </p>
      </div>
      <div>
        <BookTab />
      </div>
    </div>
  );
}

export default HeroSection;
