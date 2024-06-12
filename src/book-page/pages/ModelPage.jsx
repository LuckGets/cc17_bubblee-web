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
  const { carDetails } = useBookContext();
  const [openDetails, setOpenDetails] = useState(INIT_DETAILS);
  const [carImg, setCarImg] = useState([]);
  const [isTextShow, setIsTextShow] = useState(INIT_TEXT);
  const [carModel, setCarModel] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const { setModelId } = useReserveContext();

  const navigate = useNavigate();

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
      setCarModel(e.target.id);
    } catch (err) {
      console.log(err);
    }
  };

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
          {carDetails.map((item) => {
            return (
              <div
                id={item.id}
                onMouseEnter={() =>
                  setIsTextShow({ ...INIT_TEXT, [item.id]: true })
                }
                onMouseLeave={() =>
                  setIsTextShow({ ...INIT_TEXT, [item.id]: false })
                }
                className={`relative 
             border-2 shadow-md rounded-lg hover:shadow-xl`}
              >
                <div
                  onClick={handleOnClickOpenDetails}
                  id={item.id}
                  className="absolute w-full h-full"
                ></div>
                <div className={`flex justify-between gap-3`}>
                  <ModelCard
                    key={item.carImage[0]?.id}
                    id={item.id}
                    src={item.carImage[0]?.imagePath}
                    carImg={carImg}
                    openDetails={openDetails}
                  />
                  <div className="flex-1 p-5">
                    <ModelDetails
                      id={item.id}
                      isTextShow={isTextShow}
                      details={item}
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
