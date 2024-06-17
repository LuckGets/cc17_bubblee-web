import React from "react";

function CounterButton({ children, onClick, name }) {
  return (
    <button
      type="button"
      name={name}
      onClick={onClick}
      className="bg-black py-4 px-4 rounded-sm text-white"
    >
      {children}
    </button>
  );
}

export default CounterButton;
