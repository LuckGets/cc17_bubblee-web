import React from "react";
import { Link } from "react-router-dom";

const bgMap = {
  white: "bg-white",
  black: "bg-black",
  primary: "bg-bubblee-orange",
  green: "bg-bubblee-old-green",
  red: "bg-red-500",
};

const colorMap = {
  white: "text-white",
  black: "text-black",
};

const borderMap = {
  white: "border-white",
  black: "border-black",
};

function Button({ children, bg, text, to, border, onClick }) {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`flex justify-center items-center ${colorMap[text]} ${bgMap[bg]} ${borderMap[border]} px-6 py-3  rounded-2xl border-2 hover:brightness-90`}
    >
      {children}
    </Link>
  );
}

export default Button;
