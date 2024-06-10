import React from "react";

const borderMapping = [];

const paddingMap = {
  "2" : "py-2",
  "0" : "py-0"
}

function Input({ placeholder, value, name, onChange, p = "2" }) {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      className={`${paddingMap[p]} outline-none border-l-white border-b border-l active:border-l-10 border-l-red-500`}
      placeholder={placeholder}
    />
  );
}

export default Input;
