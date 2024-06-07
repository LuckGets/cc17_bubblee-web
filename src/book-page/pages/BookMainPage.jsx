import React from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import Button from "../components/Button";

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function BookMainPage() {
  const [number, setNumber] = useState(INIT_NUMBER);
  const handleOnClick = e => console.log(e.target)

  return (
    <div className="p-16">
      <h1>Pick the time and place</h1>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <div className="flex gap-20">
          <Counter onClick={handleOnClick} title="adults" content={number.adults} />
          <Counter onClick={handleOnClick} title="children" content={number.children} />
          <Counter onClick={handleOnClick} title="bags" content={number.bags} />
        </div>
      </div>
      <div className="py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">Back</Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/model" text="white" bg="black">Continue</Button>
      </div>
    </div>
  );
}

export default BookMainPage;
