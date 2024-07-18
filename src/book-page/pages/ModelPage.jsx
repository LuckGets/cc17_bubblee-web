import React from "react";
import Button from "../components/Button";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";
import { LeftArrowSlide, RightArrowSlide } from "../../assets/icons/icons";
import useBookContext from "../hooks/useBookContext";
import { useEffect } from "react";
import { useState } from "react";
import carsApi from "../../axios/cars";
import Modal from "../../components/Modal";
import useReserveContext from "../hooks/useReserveContext";
import { useNavigate } from "react-router-dom";

const INIT_DETAILS = {
  1: false,
  2: false,
  3: false,
  4: false,
};

const INIT_TEXT = {
  1: false,
  2: false,
  3: false,
  4: false,
};

function ModelPage() {
  const [carDetails, setCarDetails] = useState(null);
  const [isTextShow, setIsTextShow] = useState(INIT_TEXT);
  const [carModel, setCarModel] = useState(null);
  const navigate = useNavigate();

  const { setModelId, pickUpTime, modelId, passengerNum } = useReserveContext();

  const fetchCarImage = async () => {
    try {
      if (!pickUpTime) return;

      const { data } = await carsApi.filteredCarByTime({
        pickUpTime: pickUpTime,
        passengerNum: passengerNum,
      });
      const response = await carsApi.getFilteredCarMainImage({ modelId: data });
      setCarDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickSelectCar = (id) => setCarModel(id);

  useEffect(() => {
    fetchCarImage();

    if (modelId) {
      setCarModel(modelId);
    }
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!carModel) {
      return alert("Please choose atleast one type of car before proceed.");
    }
    setModelId(carModel);
    navigate("/book/confirm");
  };

  return (
    <>
      <div className="flex flex-col item-center justify-center p-10">
        <div
          role="button"
          className="grid grid-cols-2
         gap-5 gap-y-10 "
        >
          {carDetails?.map((item) => {
            return (
              <div
                key={item.modelId}
                id={item.modelId}
                className={`relative 
             border-2 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out`}
              >
                <div
                  onClick={(e) => handleClickSelectCar(item.modelId)}
                  className="absolute w-full h-full"
                ></div>
                <div className={`flex justify-between gap-3`}>
                  <ModelCard key={item.id} id={item.id} src={item.imagePath} />
                  <div
                    className={`${
                      carModel === item.modelId ? "bg-orange-500" : ""
                    } transition duration-500 ease-in-out flex-1 p-5`}
                  >
                    <ModelDetails
                      key={item.modelId}
                      id={item.modelId}
                      isTextShow={isTextShow}
                      details={item.carModel}
                      carModel={carModel}
                    />
                    {carModel === item.modelId ? (
                      <div className="bg-white p-2 w-3/4">
                        <p className="text-orange-500 text-lg">SELECT</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
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
            <Button onClick={() => setModelId(null)}>Cancel</Button>
          </div>
          <Button onClick={handleSubmitForm} text="white" bg="black">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default ModelPage;
