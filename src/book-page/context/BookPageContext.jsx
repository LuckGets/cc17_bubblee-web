import { useState } from "react";
import { createContext } from "react";
import carsApi from "../../axios/cars";
import { useEffect } from "react";

export const BookPageContext = createContext();

export default function BookPageContextProvider({ children }) {
  const [carImage, setCarImage] = useState([]);

  const fetchCarImage = async () => {
    const carImageArr = await carsApi.getCarImage();
    const newCarImageArr = carImageArr.reduce((acc,curr) => {
      if (curr.modelId !== acc.modelId) {
        
      }
    }, [])
    // setCarImage(carImageArr.data);
    console.log(carImageArr.data)
    console.log(carImage);
  };

  return (
    <BookPageContext.Provider value={{ fetchCarImage, carImage }}>
      {children}
    </BookPageContext.Provider>
  );
}
