import React from "react";
import Button from "../components/Button";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";
import { LeftArrowSlide, RightArrowSlide } from "../../assets/icons/icons";
import useBookContext from "../hooks/useBookContext";
import { useEffect } from "react";
import { useState } from "react";
import carsApi from "../../axios/cars";

const INIT_DETAILS = {
  1: false,
  2: false,
  3: false,
  4: false,
};

function ModelPage() {
  const { carDetails } = useBookContext();
  const [openDetails, setOpenDetails] = useState(INIT_DETAILS);
  const [carImg, setCarImg] = useState([]);

  const handleOnClickOpenDetails = async (e) => {
    try {
      if (openDetails[e.target.id]) {
        return setOpenDetails({ ...INIT_DETAILS });
      }
      const { data } = await carsApi.getCarAllImage(e.target.id);
      setCarImg(data.filter((item) => item.mainImage !== true));
      setOpenDetails({
        ...INIT_DETAILS,
        [e.target.id]: !INIT_DETAILS[e.target.id],
      });
      console.log(openDetails);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleOpenDetails = (e) => {
  //   return setOpenDetails({
  //     ...INIT_DETAILS,
  //     [e.target.id]: !INIT_DETAILS[e.target.id],
  //   });
  // };

  return (
    <div className="w-1/2 flex flex-col item-center justify-center p-10">
      <div
        role="button"
        className={`grid 
         gap-5 border-2 border-black`}
      >
        {carDetails.map((item) => {
          return (
            <div className="relative">
              <div
                id={item.id}
                onClick={handleOnClickOpenDetails}
                className="absolute w-full h-full"
              ></div>
              <div
                className={`flex items-center border-black border-2 bg-yellow-200`}
              >
                <ModelCard
                  key={item.carImage[0]?.id}
                  id={item.id}
                  src={item.carImage[0]?.imagePath}
                  carImg={carImg}
                  openDetails={openDetails}
                />
                <ModelDetails details={item} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book/main" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/confirm" text="white" bg="black">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ModelPage;
