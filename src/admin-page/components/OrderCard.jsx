import React from "react";
import { useEffect } from "react";
import convertISOtoLocal from "../../utils/convertISOtoLocal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderCard({ details, hovorable = true }) {
  if (
    details?.pickUpTime ||
    details?.reservedAt ||
    details?.estimatedFinishTime
  ) {
    const localPickUpTime = convertISOtoLocal(details.pickUpTime);
    const localReservedTime = convertISOtoLocal(details.reservedAt);
    const localFinishedTime = convertISOtoLocal(details.estimatedFinishTime);
    details.pickUpTime = localPickUpTime;
    details.reservedAt = localReservedTime;
    details.estimatedFinishTime = localFinishedTime;
  }

  const navigate = useNavigate();

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      role={`${hovorable ? "button" : null}`}
      onClick={() =>
        navigate(`/admin/reservation/${details?.orderId || details?.id}`)
      }
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      className={`rounded-lg shadow-lg ${
        hovorable ? "hover:shadow-2xl" : ""
      }  w-11/12 shadow-2xl`}
    >
      <h1 className="text-2xl p-5 bg-gray-800 text-white rounded-t-lg">
        Order ID : {details?.orderId || details?.id}
      </h1>
      <div className="p-5 flex flex-col gap-3">
        <span className="flex w-2/12 p-3 bg-blue-500 text-xl text-white">
          Model ID: {details?.modelId}
        </span>
        <div className="flex gap-10">
          <h1 className="text-lg">
            Pick up:{" "}
            <span className="text-xl underline pl-2">
              {details?.pickupPlace}
            </span>
          </h1>
          <h1 className="text-lg">
            Drop off:{" "}
            <span className="text-xl underline pl-2">
              {details?.dropOffPlace}
            </span>
          </h1>
        </div>
        <h1 className="text-xl">
          Pick-up Time :
          {`${details?.pickUpTime.split(",")[0]}${
            details?.pickUpTime.split(",")[1]
          }`}
        </h1>
        <h1 className="text-xl">
          Eistimated time to Finish : {details?.estimatedFinishTime}
        </h1>
        <h1>{details?.isRoundTrip ? "Round Trip" : "One-way Trip"}</h1>
        <h1 className="text-xl text-red-500">{details?.totalCost} THB</h1>
        {details?.userId ? (
          <h1>User ID : {details?.userId}</h1>
        ) : (
          <div className="flex gap-5">
            <h1 className="text-lg">Customer Name : {details?.guestName}</h1>{" "}
            <h1 className="text-lg">
              Customer Phone number : {details?.guestPhone}
            </h1>
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-6 pt-5">
            <h1 className="text-4xl underline">STATUS: </h1>
            <span
              className={`text-4xl p-2 ${
                details?.orderStatus === "FINDING"
                  ? "bg-red-500"
                  : "bg-green-400"
              } text-white rounded-lg`}
            >
              {details?.orderStatus}
            </span>
          </div>
          <div className="px-10">
            {hovorable ? (
              <button className="text-md p-5 rounded-lg text-bubblee-orange">
                CLICK TO ASSIGN OR EDIT
              </button>
            ) : null}
          </div>
        </div>
        <h1 className="text-gray-500">
          Reserved Time:
          {`${details?.reservedAt.split(",")[0]} ${
            details?.reservedAt.split(",")[1]
          }`}
        </h1>
      </div>
    </div>
  );
}

export default OrderCard;
