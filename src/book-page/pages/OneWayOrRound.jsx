import React from "react";
import Card from "../components/Card";
import useReserveContext from "../hooks/useReserveContext";

const contentArr = ["lorem1", "lorem2"];

function OneWayOrRound() {
  const { setIsRoundTrip } = useReserveContext();

  return (
    <div className="h-full flex justify-center items-center gap-10">
      <Card
        onClick={() => setIsRoundTrip(false)}
        title="One Way Trip"
        content={contentArr[0]}
      />
      <Card
        onClick={() => setIsRoundTrip(true)}
        title="Round Trip"
        content={contentArr[1]}
      />
      <button></button>
    </div>
  );
}

export default OneWayOrRound;
