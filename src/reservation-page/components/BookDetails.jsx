import React from "react";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import Button from "../../book-page/components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import CancelForm from "./CancelForm";

function BookDetails({ detail, hoverAble = true, handleEdit }) {
  const [isEditable, setIsEditAble] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  const { authenUser } = useAuthenContext();

  const fetchUserIdByOrderId = async () => {
    const { data } = await reserveApi.findUserIdByOrderId(detail?.id);
    if (data.userId === authenUser.id) {
      setIsEditAble(true);
    }
  };

  useEffect(() => {
    fetchUserIdByOrderId();
  }, []);

  return (
    <div className="my-3">
      <h1 className="w-full p-3 text-3xl bg-gray-900 text-white rounded-t-lg">
        Your Booked Trip
      </h1>
      <div
        className={`px-5 mt-3 shadow-lg ${
          hoverAble ? "hover:shadow-2xl" : ""
        } gap-3 rounded-b-lg`}
      >
        <h2 className="text-2xl">Order ID : {detail?.id}</h2>
        <p>Car Model : {detail?.model.split("_").join(" ")}</p>
        <div className="p-5 flex gap-3">
          <div className="flex flex-col">
            <p>From : {detail?.pickupPlace}</p>
            <p>Passengers : {detail?.passengerNum}</p>
            <p>
              Date :{" "}
              {detail?.pickUpTime.split("T")[0].split("-").reverse().join("/")}
            </p>
            <p className="pt-5">
              <span className="text-3xl pr-5">{detail?.totalCost} THB</span>
              <span className="text-2xl">
                {detail.isRoundTrip ? "Round-way Trip" : "One way Trip"}
              </span>
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Reserved At :
              {`${detail?.reservedAt
                .split("T")[0]
                .split("-")
                .reverse()
                .join("/")} ${detail?.reservedAt.split("T")[1].split(".")[0]}`}
            </p>
          </div>
          <div className="flex flex-col">
            <p>To : {detail?.dropOffPlace}</p>
            <p>Number of Bags : {detail?.bagNumber}</p>
            <p>
              Pick-up Time :
              {`${
                detail?.pickUpTime.split("T")[1].split(".")[0].split(":")[0]
              }:${
                detail?.pickUpTime.split("T")[1].split(".")[0].split(":")[1]
              }`}
            </p>
          </div>
        </div>
        {isEditable ? (
          <div className="flex w-full justify-end gap-10 p-5">
            <Button onClick={handleEdit} text="white" bg="primary">
              Edit
            </Button>
            <Button
              onClick={() => setConfirmDeleteModal(true)}
              text="white"
              bg="red"
            >
              Cancel
            </Button>
          </div>
        ) : null}
      </div>
      {confirmDeleteModal && (
        <Modal bg="lightGray" width={60}>
          <CancelForm
            orderId={detail?.id}
            onClose={() => setConfirmDeleteModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default BookDetails;
