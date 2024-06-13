import { createPortal } from "react-dom";

const bgMap = {
  gray: "bg-gray-500",
  white: "bg-white",
  lightGray: "bg-gray-100",
};

function Modal({ onClick, children, onClose, title, width, bg = "gray" }) {
  return createPortal(
    <>
      <div className={`fixed inset-0 z-30 opacity-50 ${bgMap[bg]}`}></div>
      <div
        onClick={onClick}
        onMouseDown={onClose}
        className="fixed inset-0 z-40"
      >
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
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
