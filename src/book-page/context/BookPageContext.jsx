import { useState } from "react";
import { createContext } from "react";
import carsApi from "../../axios/cars";
import { useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";

export const BookPageContext = createContext();

export default function BookPageContextProvider({ children }) {
  const [carImage, setCarImage] = useState([]);
  const [carDetails, setCarDetails] = useState([]);

  const { pickUpTime } = useReserveContext();

  return (
    <BookPageContext.Provider value={{ carImage, carDetails }}>
      {children}
    </BookPageContext.Provider>
  );
}
