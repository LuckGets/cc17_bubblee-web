import React from "react";

function TestimonialCard({ details }) {
  return (
    <div className="flex border-2 border-gray-300 items-center min-h-[80px] min-w-[80px] gap-5 rounded-xl">
      <img
        className="max-w-[300px] max-h-[300px]"
        src={details?.image}
        alt=""
      />
      <div className="flex flex-col gap-5 px-5">
        <p className="text-3xl">"{details?.title}"</p>
        <p className="text-xl">{details?.content}</p>
        <p className="text-xl">{details?.name}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
