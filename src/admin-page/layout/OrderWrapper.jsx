import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import OrderCard from "../components/OrderCard";

function OrderWrapper() {
  const [details, setDetail] = useState(null);

  const fetchAllUnReservedOrder = async () => {
    try {
      const { data } = await reserveApi.getAllUnReservedOrder();
      if (!data[0]) {
        alert("There is no any unreserved order in database");
      }
      setDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (details) return;
    fetchAllUnReservedOrder();
  }, []);

  return (
    <div>
      {details?.map((item) => (
        <OrderCard key={item.orderId} details={item} />
      ))}
    </div>
  );
}

export default OrderWrapper;
