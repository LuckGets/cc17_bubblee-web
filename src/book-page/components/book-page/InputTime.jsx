import React from "react";
import useReserveContext from "../../hooks/useReserveContext";

function InputTime() {
  const { pickUpTime, setPickUpTime, dropOffTime, setDropOffTime } =
    useReserveContext();

  return (
    <div>
      <h1>Pick the time and place</h1>
      <div className="flex gap-5">
        <div>
          <label className="text-2xl" htmlFor="">
            Pick up time:
          </label>
          <input
            className="border-2 border-gray-500 w-full"
            type="datetime-local"
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          />
        </div>
        <div>
          <label className="text-2xl" htmlFor="">
            Drop off time :
          </label>
          <input
            className="border-2 border-gray-500 w-full"
            type="datetime-local"
            value={dropOffTime}
            onChange={(e) => setDropOffTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default InputTime;
