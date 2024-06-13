import React from "react";

function OrderCard({ details }) {
  return (
    <div className="my-3 p-5 border-2 border-black">
      <h1>Order ID : {details?.orderId}</h1>
      <h1>Pick up: {details?.pickupPlace}</h1>
      <h1>Drop off: {details?.dropOffPlace}</h1>
      <h1>{details?.isRoundTrip ? "Round Trip" : "One-way Trip"}</h1>
      <h1>
        Pick-up Time :{" "}
        {`${details?.pickUpTime.split("T")[0].split("-").reverse().join("/")} ${
          details?.pickUpTime.split("T")[1].split(".")[0]
        }`}
      </h1>
      <h1>Model ID: {details?.modelId}</h1>
      <h1>STATUS: {details?.orderStatus}</h1>
      <h1>Price : {details?.totalCost}</h1>
      <h1>
        Reserved Time:{" "}
        {`${details?.reservedAt.split("T")[0].split("-").reverse().join("/")} ${
          details?.reservedAt.split("T")[1].split(".")[0]
        }`}
      </h1>
      {details?.userId ? (
        <h1>User : {details?.userId}</h1>
      ) : (
        <>
          <h1>Name : {details?.guestName}</h1>{" "}
          <h1>Phone number : {details.guestPhone}</h1>
        </>
      )}
    </div>
  );
}

export default OrderCard;
