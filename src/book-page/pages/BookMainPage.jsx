import React from "react";
import Counter from "../components/Counter";
import { useState } from "react";
import MapRenderer from "../google-maps/Map";
import Button from "../components/Button";
import BookForm from "../components/book-page/BookForm";

const INIT_NUMBER = {
  adults: 0,
  children: 0,
  bags: 0,
};

function BookMainPage() {
  // const [number, setNumber] = useState(INIT_NUMBER);
  // const handleOnPlus = (e) =>
  //   setNumber((prev) => ({
  //     ...prev,
  //     [e.target.name]: prev[e.target.name] + 1,
  //   }));
  // const handleonMinus = (e) => {
  //   if (number[e.target.name] > 0)
  //     setNumber((prev) => ({
  //       ...prev,
  //       [e.target.name]: prev[e.target.name] - 1,
  //     }));
  // };

  return (
    <form className="p-16 flex flex-col items-center">
      <BookForm />
      <div className="w-full py-10 flex justify-between">
        <div className="flex gap-5">
          <Button to="/book" bg="white">
            Back
          </Button>
          <Button to="/">Cancel</Button>
        </div>
        <Button to="/book/model" text="white" bg="black">
          Continue
        </Button>
      </div>
    </form>
  );
}

export default BookMainPage;
