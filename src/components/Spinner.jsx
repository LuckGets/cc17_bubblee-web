import { LoaderIcon } from "../assets/icons/icons";

export default function Spinner({ transparent }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-white z-40 ${
          transparent ? "opacity-70" : ""
        }`}
      ></div>
      <div className="fixed inset-0 flex justify-center items-center animate-spin z-50">
        <LoaderIcon className="fill-blue-700 w-16 h-16" />
      </div>
    </>
  );
}
