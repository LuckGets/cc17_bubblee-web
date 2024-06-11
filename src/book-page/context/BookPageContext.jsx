import { useState } from "react";
import { createContext } from "react";
import carsApi from "../../axios/cars";
import { useEffect } from "react";

export const BookPageContext = createContext();

export default function BookPageContextProvider({ children }) {
  const [carImage, setCarImage] = useState([]);
  const [carDetails, setCarDetails] = useState([]);

  const fetchCarImage = async () => {
    const { data } = await carsApi.getCarImage();
    setCarImage(data);
    const response = await carsApi.getCarDetails();
    setCarDetails(response.data)
  }; 

  useEffect(() => {
    fetchCarImage();
  }, []);

  return (
    <BookPageContext.Provider value={{ fetchCarImage, carImage, carDetails }}>
      {children}
    </BookPageContext.Provider>
  );
}
