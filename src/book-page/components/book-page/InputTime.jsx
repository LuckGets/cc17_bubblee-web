import React from "react";
import useReserveContext from "../../hooks/useReserveContext";
import { useEffect } from "react";
import formatDateTime from "../../../utils/formatDateTime";

function InputTime({ min, date }) {
  const { pickUpTime, setPickUpTime } = useReserveContext();

  return (
    <div>
      <div className="w-full flex flex-col gap-2">
        <label className="text-lg">Pick up time:</label>
        <input
          placeholder="*pick-up time"
          className="border-2 border-gray-400 w-full text-gray-600"
          type="datetime-local"
          min={min}
          value={pickUpTime}
          onChange={(e) => setPickUpTime(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputTime;
