import React from "react";
import { useParams } from "react-router-dom";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../axios/reserve";
import BookDetails from "./components/BookDetails";
import Button from "../book-page/components/Button";

function ReserveHistory() {
  const { authenUser } = useAuthenContext();
  const [orderHistory, setOrderHistory] = useState(null);

  const fetchOrderHistory = async () => {
    try {
      const { data } = await reserveApi.findReserveHistoryByUserId();
      setOrderHistory(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const handleOnEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl">Reservation History</h1>
      {orderHistory ? (
        orderHistory?.map((item) => (
          <BookDetails
            handleEdit={handleOnEdit}
            hoverAble={false}
            detail={item}
          />
        ))
      ) : (
        <div>
          <h1>Looks Like You never booked the trip with us.</h1>
          <p>Start a new Trip?</p>
          <Button to="/book"></Button>
        </div>
      )}
    </div>
  );
}

export default ReserveHistory;
