import React from "react";
import useAuthenContext from "../authentication/hooks/useAuthenContext";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../axios/reserve";
import BookDetails from "./components/BookDetails";
import Button from "../book-page/components/Button";

function ReserveHistory() {
  const { authenUser } = useAuthenContext();

  const [userHistory, setUserHistory] = useState(null);

  const fetchOrderHistory = async () => {
    try {
      if (!authenUser) return;
      const { data } = await reserveApi.findReserveHistoryByUserId();
      setUserHistory(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userHistory && userHistory.length >= 1) return;
    fetchOrderHistory();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl">Reservation History</h1>
      {userHistory ? (
        userHistory?.map((item) => (
          <BookDetails key={item.id} hoverAble={false} detail={item} />
        ))
      ) : (
        <div className="flex flex-col mt-5 gap-5">
          <h1 className="text-3xl">
            Looks Like You have never booked the trip with us yet.
          </h1>
          <p className="text-2xl">Start a new Trip?</p>
          <Button text="white" bg="primary" to="/book">
            BOOK
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReserveHistory;
