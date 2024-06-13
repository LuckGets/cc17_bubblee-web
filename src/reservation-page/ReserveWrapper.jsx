import React from "react";
import Input from "../components/Input";
import Button from "../book-page/components/Button";
import { useState } from "react";
import BookDetails from "./components/BookDetails";
import reserveApi from "../axios/reserve";

const INIT_INPUT = {
  orderId: "",
  email: "",
  phone: "",
};

const INIT_ERROR = {
  orderId: "",
  name: "",
  phone: "",
};

function ReserveWrapper() {
  const [order, setOrder] = useState(INIT_INPUT);
  const [error, setError] = useState(INIT_ERROR);
  const [isOrder, setIsOrder] = useState(false);
  const [detail, setDetail] = useState(null);

  const handleFindReserve = async (e) => {
    try {
      e.preventDefault();
      if (!order.orderId || !order.phone || !order.email) {
        return console.log("Please input required information");
      }
      const response =
        await reserveApi.findReserveOrderDetailsByOrderIdEmailAndPhone(order);
      setDetail(response.data);
      if (response.data) {
        setIsOrder(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeInput = (e) =>
    setOrder({ ...order, [e.target.name]: e.target.value });

  return (
    <>
      <div className="flex flex-col gap-20 py-5 px-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl">Find Reservation</h1>
          <div className="flex justify-between">
            <Input
              value={order.orderId}
              name="orderId"
              onChange={handleChangeInput}
              placeholder="*Order ID"
            />
            <Input
              value={order.email}
              name="email"
              onChange={handleChangeInput}
              placeholder="*Email"
            />
            <Input
              value={order.phone}
              name="phone"
              onChange={handleChangeInput}
              placeholder="*Phone"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button to="/" border="black">
            Back to Home page
          </Button>
          <Button onClick={handleFindReserve} text="white" bg="green">
            Find Reservation
          </Button>
        </div>
      </div>
      {isOrder && <BookDetails detail={detail} />}
    </>
  );
}

export default ReserveWrapper;
