import React from "react";

function ButtonState({ name, children, onClick }) {
  return (
    <button
      name={name}
      onClick={onClick}
      className="py-3 px-8 text-lg bg-gray-200 rounded-full text-gray-700"
    >
      {children}
    </button>
  );
}

export default ButtonState;
