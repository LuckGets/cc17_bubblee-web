import React from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import CarDetails from "../components/CarDetails";
import useReserveContext from "../hooks/useReserveContext";
import reserveApi from "../../axios/reserve";
import { useState } from "react";

function SuccessPage() {
  const { tempOrderId } = useReserveContext();

  return (
    <div className="w-full h-full py-20 items-center gap-10 flex flex-col">
      <div className="flex flex-col gap-5 p-10 rounded-xl border-2 border-black w-4/6">
        <h1 className="text-center text-3xl">Payment Success</h1>
        <h2 className="text-2xl underline">TRIP DETAILS</h2>
        <div className="flex items-baseline gap-5">
          <p className="text-xl">
            Order ID : <span className="text-3xl">{tempOrderId}</span>
          </p>
          <span className="text-[0.75rem] text-red-500">
            Please remember the order ID.
          </span>
        </div>
        <CarDetails text="medium" title="medium" />
      </div>
      <div className="flex justify-around gap-60">
        <Button border="white" text="white" to="/" bg="green">
          Back to Home Page
        </Button>
        <Button to="/reserve" border="white" text="white" bg="primary">
          Check your reservation
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
