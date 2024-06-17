import React from "react";
import BookSubHeader from "./layout/BookSubHeader";
import BookMainPart from "./pages/OneWayOrRound";
import { Outlet } from "react-router-dom";
import BookPageContextProvider from "./context/BookPageContext";

function BookWrapper() {
  return (
    <div>
      <BookSubHeader />
      <div className="flex justify-center w-full bg-gray-300 min-h-[45rem] pb-10 pt-20">
        <div className="w-10/12 bg-white rounded-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default BookWrapper;
