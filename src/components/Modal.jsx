import React from "react";
import Input from "./Input";

function Modal({ children, onClose, title, width }) {
  return (
    <>
      <div className="fixed inset-0 z-30 opacity-50 bg-gray-500"></div>
      <div onMouseDown={onClose} className="fixed inset-0 z-40">
        <div className="min-h-screen items-center flex justify-center">
          <div
            onMouseDown={(e) => e.stopPropagation()}
            style={{ width: `${width}rem` }}
            className="p-5 bg-white flex flex-col gap-5 rounded-lg"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
