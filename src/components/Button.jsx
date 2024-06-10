import React from "react";
import { ROOT_COLOR } from "../constants/color";

const bgMap = {
  primary: `#DD6621`,
};

function Button({ children, bg = "primary", onClick }) {
  return <button onClick={onClick} className={`border- bg-${bgMap["primary"]}-300 hover:${bgMap}`}>{children}</button>;
}

export default Button;
