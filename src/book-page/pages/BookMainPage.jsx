import React from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import MapRenderer from "../google-maps/Map";
import Button from "../components/Button";

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function BookMainPage() {
  const [number, setNumber] = useState(INIT_NUMBER);
  const handleOnPlus = (e) =>
    setNumber((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1,
    }));
  const handleonMinus = (e) => {
    if (number[e.target.name] > 0)
      setNumber((prev) => ({
        ...prev,
        [e.target.name]: prev[e.target.name] - 1,
      }));
  };

  return (
    <div className="p-16 flex flex-col items-center">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <h1>Pick the time and place</h1>
          <div></div>
          <div></div>
          <div></div>
          <div className="flex gap-20">
            <Counter
              onPlus={handleOnPlus}
              onMinus={handleonMinus}
              title="adults"
              content={number.adults}
            />
            <Counter
              onPlus={handleOnPlus}
              onMinus={handleonMinus}
              title="children"
              content={number.children}
            />
            <Counter
              onPlus={handleOnPlus}
              onMinus={handleonMinus}
              title="bags"
              content={number.bags}
            />
          </div>
        </div>
        <MapRenderer />
      </div>

      <div className="w-full py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/model" text="white" bg="black">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default BookMainPage;
