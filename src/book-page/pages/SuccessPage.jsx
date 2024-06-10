import React from "react";
import Button from "../components/Button";

function SuccessPage() {
  return (
    <div className="w-full h-full py-20 items-center gap-10 flex flex-col">
      <div className="flex flex-col gap-5 px-10 rounded-xl border-2 border-black w-4/6">
        <h1 className="text-center text-3xl">Payment Success</h1>
        <h2 className="text-2xl ">TRIP DETAILS</h2>
        <p>Confirmation number : 1</p>
        <p>Car Model : 1</p>
        <div className="flex">
          <p>From : 1</p>
          <p>To : 1</p>
        </div>
        <p>Confirmation number : 1</p>
        <p>Confirmation number : 1</p>
      </div>
      <div className="flex justify-around gap-60">
        <Button border="white" text="white" to="/" bg="green">Back to Home Page</Button>
        <Button border="white" text="white" bg="primary">Check your reservation</Button>
      </div>
    </div>
  );
}

export default SuccessPage;
