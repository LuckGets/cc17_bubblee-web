import React from "react";
import useReserveContext from "../../hooks/useReserveContext";

function InputTime({ min }) {
  const { pickUpTime, setPickUpTime } = useReserveContext();

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
            min={min}
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default InputTime;
