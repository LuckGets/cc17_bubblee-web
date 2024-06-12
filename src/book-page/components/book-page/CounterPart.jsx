import { useState } from "react";
import Counter from "../Counter";
import useReserveContext from "../../hooks/useReserveContext";

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function CounterPart() {
  const { number, setNumber } = useReserveContext();

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
  );
}

export default CounterPart;
