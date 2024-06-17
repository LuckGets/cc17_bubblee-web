import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import OrderCard from "../components/OrderCard";
import ButtonState from "../components/ButtonState";
import { AxiosError } from "axios";

const INIT_OrderState = {
  UnreservedOrder: false,
  AllOrder: false,
  today: false,
  expired: false,
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

  const handleChangeState = (e) =>
    setOrderState({ ...INIT_OrderState, [e.target.name]: true });

  const fetchAllOrder = async () => {
    const { data } = await reserveApi.getAllOrder();
    console.log(data);
    setDetail(data);
  };

  const fetchTodayOrders = async () => {
    try {
      const { data } = await reserveApi.getTodayOrder();
      setDetail(data);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        alert(err.data.statusText);
      }
    }
  };

  const fetchExpiredOrders = async () => {
    const { data } = await reserveApi.getExpiredOrder();
    setDetail(data);
  };

  useEffect(() => {
    if (!details) fetchAllUnReservedOrder();

    if (orderState.UnreservedOrder) {
      fetchAllUnReservedOrder();
    }

    if (orderState.AllOrder) {
      fetchAllOrder();
    }

    if (orderState.today) {
      fetchTodayOrders();
    }

    if (orderState.expired) {
      fetchExpiredOrders();
    }
  }, [orderState]);

  return (
    <div className="flex flex-col gap-8 w-5/6 bg-white p-20 min-h-[100vh]">
      <div className="flex gap-10 p-4">
        <ButtonState name="AllOrder" onClick={handleChangeState}>
          All
        </ButtonState>
        <ButtonState name="Unreserved" onClick={handleChangeState}>
          Unreserved
        </ButtonState>
        <ButtonState name="today" onClick={handleChangeState}>
          Today-Jobs
        </ButtonState>
        <ButtonState name="expired" onClick={handleChangeState}>
          Expired-Jobs
        </ButtonState>
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
