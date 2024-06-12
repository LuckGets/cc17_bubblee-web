import { useState } from "react";

import useReserveContext from "../../hooks/useReserveContext";
import InputTime from "./InputTime";
import CounterPart from "./CounterPart";
import PlaceInput from "./PlaceInput";
import MapRenderer from "../../google-maps/Map";

function BookForm() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <InputTime />
        <div>
          <PlaceInput />
        </div>
        <div></div>
        <CounterPart />
      </div>
      <div className=" flex justify-center w-[20rem] h-[40rem]">
        FAKE GOOGLE MAP
      </div>
      {/* <MapRenderer /> */}
    </div>
  );
}

export default BookForm;
