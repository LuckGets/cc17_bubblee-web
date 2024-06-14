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

  const [openModal, setOpenModal] = useState(false);

  const { setModelId, pickUpTime } = useReserveContext();

  const fetchCarImage = async () => {
    try {
      if (!pickUpTime) return;
      const pickupInMilli = Date.parse(pickUpTime);
      const isoDate = new Date(pickupInMilli);
      const { data } = await carsApi.filteredCarByTime({
        pickUpTime: isoDate.toISOString(),
      });
      console.log(data);
      const response = await carsApi.getFilteredCarMainImage({ modelId: data });
      setCarDetails(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCarImage();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!carModel) {
      return console.log("please choose one car model");
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
                onMouseEnter={(e) =>
                  setIsTextShow({ ...INIT_TEXT, [e.target.id]: true })
                }
                onMouseLeave={(e) =>
                  setIsTextShow({
                    ...INIT_TEXT,
                    [e.target.id]: false,
                  })
                }
                id={item.modelId}
                className={`relative 
             border-2 shadow-md rounded-lg hover:shadow-xl`}
              >
                <div
                  onClick={(e) => setCarModel(e.target.id)}
                  id={item.modelId}
                  className="absolute w-full h-full"
                ></div>
                <div className={`flex justify-between gap-3`}>
                  <ModelCard key={item.id} id={item.id} src={item.imagePath} />
                  <div className="flex-1 p-5">
                    <ModelDetails
                      key={item.modelId}
                      id={item.modelId}
                      isTextShow={isTextShow}
                      details={item.carModel}
                    />
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
            <Button to="/">Cancel</Button>
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
