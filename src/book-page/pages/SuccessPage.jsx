import React from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import CarDetails from "../components/CarDetails";
import useReserveContext from "../hooks/useReserveContext";
import reserveApi from "../../axios/reserve";

function SuccessPage() {
  const { tempOrderId, setTempOrderId } = useReserveContext();

  useEffect(() => {
    const findDetails = async () => {
      const { data } = await reserveApi.findReserveOrderDetails(tempOrderId);
      console.log(data);
    };
    findDetails();
  }, []);

  return (
    <div className="w-full h-full py-20 items-center gap-10 flex flex-col">
      <div className="flex flex-col gap-5 p-10 rounded-xl border-2 border-black w-4/6">
        <h1 className="text-center text-3xl">Payment Success</h1>
        <h2 className="text-2xl ">TRIP DETAILS</h2>
        <p className="text-xl">Order ID : {tempOrderId}</p>
        <CarDetails />
      </div>
      <div className="flex justify-around gap-60">
        <Button border="white" text="white" to="/" bg="green">
          Back to Home Page
        </Button>
        <Button border="white" text="white" bg="primary">
          Check your reservation
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
