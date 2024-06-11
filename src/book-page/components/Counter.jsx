import React from "react";
import CounterButton from "./CounterButton";

function Counter({ content, title, onPlus, onMinus}) {
  return (
    <div>
      <p className="text-[0.8rem] text-gray-500">{title} :</p>
      <div className="flex border-gray-400 border-[1px]">
        <CounterButton name={title} onClick={onPlus}>&#43;</CounterButton>
        <div className=" flex justify-center items-center px-14">{content}</div>
        <CounterButton name={title} onClick={onMinus}> &#8722;</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
