import React from "react";
import { CrossMark } from "../../../assets/icons/icons";

function FaqCard({ isShow, id, details, onClick }) {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex flex-col gap-5 bg-[#F5F2F0] justify-between py-5 rounded-xl"
    >
      <div className="flex gap-3 items-center justify-between px-5">
        <h1 className="flex-grow text-xl px-2">{details?.title}</h1>
        <div className="w-3">
          <CrossMark
            className={`${
              isShow[id] ? "" : "rotate-45"
            } transition duration-150 ease-in-out`}
          />
        </div>
      </div>
      {isShow[id] ? (
        <div className="text-lg px-7 transition duration-200 ease-in-out">
          <p>{details?.content}</p>
        </div>
      ) : null}
    </div>
  );
}

export default FaqCard;
