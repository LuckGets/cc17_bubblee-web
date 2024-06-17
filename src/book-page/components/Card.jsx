import React from "react";
import placeholderImage from "../../assets/images/placeholderimage.png";
import vanImage from "../../assets/images/ezy-van.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Card({ title, content, onClick }) {
  return (
    <div className="w-11/12 gap-5 flex border-gray-300 border-2 p-2">
      <div className="flex justify-center max-w-[400px] max-h-[400px] w-2/3">
        <img className="w-full h-full rounded-lg" src={vanImage} alt="" />
      </div>
      <div className="flex flex-col gap-5 justify-center flex-grow px-20">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl">{title}</h1>
        </div>
        <div>
          <p>{content}</p>
        </div>
        <Link
          onClick={onClick}
          to="/book/main"
          className=" flex justify-center bg-bubblee-light-green py-2 rounded-xl hover:scale-105 transtion duration-500 ease-in-out text-white"
        >
          Select
        </Link>
      </div>
    </div>
  );
}

export default Card;
