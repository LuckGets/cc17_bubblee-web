import React from "react";
import useReserveContext from "../hooks/useReserveContext";
import { useState } from "react";
import carsApi from "../../axios/cars";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import CustomerInform from "../components/confirm-page/CustomerInform";
import CarDetails from "../components/CarDetails";
import Button from "../components/Button";
import transactionAPi from "../../axios/transaction";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const {
    guestInfo,
    pickUpTime,
    pickupPlace,
    dropOffPlace,
    modelId,
    setTempOrderId,
  } = useReserveContext();
  const { authenUser } = useAuthenContext();

  const navigate = useNavigate();

  const [transType, setTransType] = useState();

  const handleOnPayment = async (e) => {
    try {
      e.preventDefault();
      const data = {};
      if (guestInfo.name && guestInfo.email && guestInfo.phone) {
        data.guestInfo = {
          guestName: guestInfo.name,
          guestMail: guestInfo.email,
          guestPhone: guestInfo.phone,
        };
      }

      if (authenUser) {
        data.userId = authenUser.id;
      }

      data.pickUpTime = new Date(pickUpTime);
      data.pickupPlace = pickupPlace;
      data.dropOffPlace = dropOffPlace;
      data.modelId = +modelId;
      const response = await transactionAPi.createTransactionOrder(data);
      console.log(response);
      alert("Transaction completed. Booking success!");
      navigate("/book/success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex p-5 gap-5">
        <div className="w-full flex flex-col justify-between gap-5">
          {authenUser ? (
            <CustomerInform />
          ) : (
            <CustomerInform guestInfo={guestInfo} />
          )}
          <CarDetails />
        </div>
        <div className="w-full border-2 border-black flex flex-col gap-5">
          Payment part
          <div>
            <div>
              <input type="radio" />
              <label htmlFor="">Cash</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">QR code</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">Credit card</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button onClick={handleOnPayment} text="white" bg="black">
          Confirm Payment
        </Button>
      </div>
    </>
  );
}

export default PaymentPage;
