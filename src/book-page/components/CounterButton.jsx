import React from "react";

function CounterButton({ children, onClick, name }) {
  return (
    <button
      type="button"
      name={name}
      onClick={onClick}
      className="bg-bubblee-light-gray py-2 px-3"
    >
      {children}
    </button>
  );
}

export default CounterButton;
