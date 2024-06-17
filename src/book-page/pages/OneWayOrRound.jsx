import React from "react";
import Card from "../components/Card";
import useReserveContext from "../hooks/useReserveContext";

const contentArr = [
  "Book our customer's popular choice one way trip service. You choose the pick-up place you desired and we are striving to take you to drop-off place safe and sound.",
  "lorem2",
];

function OneWayOrRound() {
  const { setIsRoundTrip } = useReserveContext();

  return (
    <div className="h-full flex justify-center items-center gap-10">
      <Card
        onClick={() => setIsRoundTrip(false)}
        title="One Way Trip"
        content={contentArr[0]}
      />
    </div>
  );
}

export default OneWayOrRound;
