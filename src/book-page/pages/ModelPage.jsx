import React from "react";
import Button from "../components/Button";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";
import { LeftArrowSlide, RightArrowSlide } from "../../assets/icons/icons";
import useBookContext from "../hooks/useBookContext";
import { useEffect } from "react";

function ModelPage() {
  const { fetchCarImage, carImage } = useBookContext();

  useEffect(() => {
    fetchCarImage();
    console.log(carImage);
  }, []);

  return (
    <div className="w-full flex flex-col item-center justify-center">
      <div className="flex justify-center gap-5">
        <ModelDetails />
        <div className="flex items-center">
          <div
            role="button"
            className="p-1 rounded-full w-[3rem] hover:bg-gray-300 flex justify-center items-center"
          >
            <LeftArrowSlide />
          </div>
          <ModelCard />
          <div
            role="button"
            className="p-1 rounded-full w-[3rem] hover:bg-gray-300 flex justify-center items-center"
          >
            <RightArrowSlide />
          </div>
        </div>
      </div>
      <div className="w-1/2 py-10 flex justify-between">
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
