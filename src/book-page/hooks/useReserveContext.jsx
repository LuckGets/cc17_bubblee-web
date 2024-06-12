import React from "react";
import { useContext } from "react";
import { ReserveContext } from "../context/ReserveContext";

function useReserveContext() {
  const sharedValue = useContext(ReserveContext);
  return sharedValue;
}

export default useReserveContext;
