import React from "react";

function CarImageCard({ src }) {
  return (
    <div className="max-w-[15rem]">
      <img
        className="bg-center bg-cover bg-no-repeat h-full w-full rounded-lg"
        src={src}
      />
    </div>
  );
}

export default CarImageCard;
