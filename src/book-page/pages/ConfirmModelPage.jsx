import React from "react";
import ModelCard from "../components/ModelCard";
import ModelDetails from "../components/ModelDetails";
import Button from "../components/Button";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import ContactInform from "../components/confirm-page/ContactInform";
import CustomerInform from "../components/confirm-page/CustomerInform";
import { useState } from "react";
import { guestSchema } from "../../validation/joi-schema/joi";
import validator from "../../validation/validator";
import userApi from "../../axios/user";

const INIT_GUEST = {
  name: "",
  email: "",
  phone: "",
};

const INIT_ERROR = {
  name: "",
  email: "",
  phone: "",
};

function ConfirmModelPage() {
  const { authenUser } = useAuthenContext();

  const [guestInfo, setGuestInfo] = useState(INIT_GUEST);
  const [errorGuest, setErrorGuest] = useState(INIT_ERROR);
  const [authenGuest, setAuthenGuest] = useState(false);

  const handleChangeInput = (e) =>
    setGuestInfo({ ...guestInfo, [e.target.name]: e.target.value });

  const handleSubmitGuest = async (e) => {
    try {
      e.preventDefault();
      const error = validator(guestSchema, guestInfo);
      if (error) {
        return setErrorGuest(error);
      }
      setErrorGuest({ ...INIT_ERROR });

      const response = await userApi.findUser(guestInfo);
      if (response.data.user) {
        const { user } = response.data;
        if (user.email === guestInfo.email) {
          return setErrorGuest({
            ...errorGuest,
            email:
              "This email already have registered. If it's your email. Please login for access our service.",
          });
        }

        if (user.phone === guestInfo.phone) {
          return setErrorGuest({
            ...errorGuest,
            phone:
              "This phone already have registered. If it's your phone. Please login for access our service.",
          });
        }
      }
      console.log("hello")
      setAuthenGuest(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditInfo = () => setAuthenGuest(false);

  return (
    <div className="p-10 flex justify-between gap-10">
      <div className="w-full flex flex-col justify-between">
        {authenUser ? (
          <CustomerInform handleEditInfo={handleEditInfo} />
        ) : authenGuest ? (
          <CustomerInform
            handleEditInfo={handleEditInfo}
            guestInfo={guestInfo}
          />
        ) : (
          <ContactInform
            error={errorGuest}
            handleSubmit={handleSubmitGuest}
            guestInfo={guestInfo}
            setGuestInfo={handleChangeInput}
            authenGuest={authenGuest}
          />
        )}
        <div className="border-2 border-black">
          <h1 className="text-3xl">Model : ALL NEW</h1>
          <div className="flex justify-between w-3/4">
            <p>From : </p>
            <p>To :</p>
          </div>
          <div className="flex justify-between w-3/4">
            <p>Passengers : </p>
            <p>Number of bags :</p>
          </div>
          <div className="flex justify-between w-3/4">
            <p>From : </p>
            <p>To :</p>
          </div>
          <div className="flex justify-between w-3/4">
            <p>From : </p>
            <p>To :</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Button to="/book" bg="white">
              Back
            </Button>
            <Button to="/">Cancel</Button>
          </div>
          <Button to="/book/payment" text="white" bg="black">
            Continue
          </Button>
        </div>
      </div>
      <div className="w-full border-2 border-black">
        <ModelCard />
      </div>
    </div>
  );
}

export default ConfirmModelPage;
