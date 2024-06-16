import React from "react";
import heroImage from "../assets/images/customervan.jpg";
import { CorrectMark } from "../assets/icons/icons";

function MiddlePart() {
  return (
    <div className="px-20 py-20 grid grid-cols-2 gap-28">
      <div className="max-w-[800px] max-h-[600px]">
        <img className="w-full h-full rounded-xl" src={heroImage} alt="" />
      </div>
      <div>
        <h1 className="text-6xl pb-10">Why our services worth your choice?</h1>
        <p className="text-2xl leading-relaxed pb-10">
          At Bubblee, we strive to provide our customer reliable and on-time
          service. We understand that being punctual is important, So it's our
          priority to get you to your destination on time, every time.
        </p>
        <div className="px-5">
          <div className="flex pb-5 gap-3">
            <div className="w-5">
              <CorrectMark />
            </div>
            <p>Trained and Licensed Drivers</p>
          </div>
          <div className="flex pb-5 gap-3">
            <div className="w-5">
              <CorrectMark />
            </div>
            <p>Vans Seat up to 10 people</p>
          </div>
          <div className="flex pb-5 gap-3">
            <div className="w-5">
              <CorrectMark />
            </div>
            <p>Always ontime</p>
          </div>
          <div className="flex pb-5 gap-3">
            <div className="w-5">
              <CorrectMark />
            </div>
            <p>No extra baggage charges</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePart;
