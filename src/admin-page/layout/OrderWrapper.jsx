import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import OrderCard from "../components/OrderCard";

const INIT_OrderState = {
  UnreservedOrder: false,
  AllOrder: false,
};

function OrderWrapper() {
  const [details, setDetail] = useState(null);

  const [orderState, setOrderState] = useState(INIT_OrderState);

  const fetchAllUnReservedOrder = async () => {
    try {
      console.log("UnReserved");
      const { data } = await reserveApi.getAllUnReservedOrder();
      if (!data[0]) {
        alert("There is no any unreserved order in database");
      }
      setDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllOrder = async () => {
    const { data } = await reserveApi.getAllOrder();
    console.log(data);
    setDetail(data);
  };

  useEffect(() => {
    if (!details) fetchAllUnReservedOrder();

    if (orderState.UnreservedOrder && !orderState.AllOrder) {
      fetchAllUnReservedOrder();
    }

    if (orderState.AllOrder && !orderState.UnreservedOrder) {
      fetchAllOrder();
    }
  }, [orderState]);

  return (
    <div className="flex flex-col gap-8 w-5/6 bg-white p-20 min-h-[100vh]">
      <div className="flex gap-10 p-4">
        <button
          name="AllOrder"
          onClick={(e) =>
            setOrderState(() => ({
              ...INIT_OrderState,
              [e.target.name]: true,
            }))
          }
          className="py-3 px-8 text-lg bg-gray-200 rounded-full text-gray-700"
        >
          All
        </button>
        <button
          name="UnreservedOrder"
          onClick={(e) => {
            setOrderState(() => ({
              ...INIT_OrderState,
              [e.target.name]: true,
            }));
          }}
          className="p-3 text-lg bg-gray-200 rounded-full text-gray-700"
        >
          Unreseved Order
        </button>
        <button></button>
      </div>
      {details?.map((item) => (
        <div className="">
          <OrderCard key={item.orderId} details={item} />
        </div>
      ))}
    </div>
  );
}

export default OrderWrapper;
