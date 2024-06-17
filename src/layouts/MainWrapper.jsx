import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function MainWrapper() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainWrapper;
