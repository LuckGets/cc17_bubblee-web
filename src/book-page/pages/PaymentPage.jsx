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
import { AxiosError } from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function PaymentPage() {
  const {
    guestInfo,
    pickUpTime,
    pickupPlace,
    dropOffPlace,
    modelId,
    totalCost,
    setTempOrderId,
  } = useReserveContext();
  const { authenUser } = useAuthenContext();

  const navigate = useNavigate();

  const [carImage, setCarImage] = useState(null);

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
      await transactionAPi.createTransactionOrder(data);
      alert("Transaction completed. Booking success!");
      navigate("/book/success");
    } catch (err) {
      if (err instanceof AxiosError) console.log(err);
      alert(`${err.data.message}`);
    }
  };

  useEffect(() => {
    const fetchCarMainImage = async () => {
      const { data } = await carsApi.getMainImageByCarId(+modelId);
      if (!data) {
        return <Navigate to="/book/main" />;
      }
      setCarImage(data);
    };
    fetchCarMainImage();
  });

  return (
    <>
      <div className="flex pb-10 gap-5">
        <div className="w-full flex flex-col justify-between gap-5">
          {authenUser ? (
            <CustomerInform />
          ) : (
            <CustomerInform editAble={false} guestInfo={guestInfo} />
          )}
          <CarDetails title="large" />
        </div>
        <div className="w-full flex flex-col gap-5 px-4">
          <h1 className="text-4xl">Disclaimer</h1>
          <div className="flex flex-col gap-8">
            <p className="text-xl">
              Please recheck the trip detail before proceed on the nextpage.
              After "Confirm payment" is clicked, your order will be confirmed
              and we will contact you one day before the pick-up time.
            </p>
            <p className="text-gray-500">
              *You can pay after the trip is done to our driver by cash or
              qrcode. Thank you for consider using our service.*
            </p>
            <p className="text-2xl">HAVE A SAFE TRIP!</p>
            {/* <div>
              <input type="radio" />
              <label htmlFor="">QR code</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">Credit card</label>
            </div> */}
          </div>
          <img className="rounded-lg" src={carImage?.imagePath} alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Button to="/book/confirm" bg="white">
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
