import React from "react";

const borderMapping = [];

function Input({ placeholder, value, name, onChange }) {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      className="py-2 outline-none border-l-white border-b border-l active:border-l-10 border-l-red-500"
      placeholder={placeholder}
    />
  );
}

export default Input;
