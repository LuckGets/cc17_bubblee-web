import React from "react";
import placeholderImage from "../../assets/images/placeholderimage.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Card({title, content}) {
  return (
    <div className="w-[25rem] gap-5 flex flex-col p-10 border-black border-4">
      <div className="flex justify-center">
        <img className="w-[10rem] h-[10rem]" src={placeholderImage} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">{title}</h1>
      </div>
      <div>
        <p>
          {content}
        </p>
      </div>
      <Link to="/book/main" className=" flex justify-center bg-bubblee-light-green py-2 rounded-xl">Select</Link>
    </div>
  );
}

export default Card;
