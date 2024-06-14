import React from "react";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import { useEffect } from "react";
import { useState } from "react";
import reserveApi from "../../axios/reserve";
import Button from "../../book-page/components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import CancelForm from "./CancelForm";
import useReserveContext from "../../book-page/hooks/useReserveContext";
import { useNavigate } from "react-router-dom";
import convertISOtoLocal from "../../utils/convertISOtoLocal";

function BookDetails({ detail, hoverAble = true }) {
  const [isEditable, setIsEditAble] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const navigate = useNavigate();

  const { authenUser } = useAuthenContext();
  const { setTempOrderId } = useReserveContext();

  const fetchUserIdByOrderId = async () => {
    const { data } = await reserveApi.findUserIdByOrderId(detail?.id);
    if (data.userId === authenUser.id) {
      setIsEditAble(true);
    }
  };

  const handleOnEdit = (e) => {
    e.preventDefault();
    setTempOrderId(detail?.id);
    navigate("/book/main");
  };

  useEffect(() => {
    fetchUserIdByOrderId();
  }, []);

  if (detail.pickUpTime && detail.reservedAt) {
    const localPickUpTime = convertISOtoLocal(detail.pickUpTime);
    const localReservedTime = convertISOtoLocal(detail.reservedAt);
    detail.pickUpTime = localPickUpTime;
    detail.reservedAt = localReservedTime;
  }

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
            <p>Date : {detail?.pickUpTime.split(",")[0]}</p>
            <p className="pt-5">
              <span className="text-3xl pr-5">{detail?.totalCost} THB</span>
              <span className="text-2xl">
                {detail.isRoundTrip ? "Round-way Trip" : "One way Trip"}
              </span>
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Reserved At :
              {`${detail?.reservedAt.split(",")[0]} ${
                detail?.reservedAt.split(",")[1]
              }`}
            </p>
          </div>
          <div className="flex flex-col">
            <p>To : {detail?.dropOffPlace}</p>
            <p>Number of Bags : {detail?.bagNumber}</p>
            <p>Pick-up Time :{`${detail?.pickUpTime.split(",")[1]}`}</p>
          </div>
        </div>
        {isEditable ? (
          <div className="flex w-full justify-end gap-10 p-5">
            <Button onClick={handleOnEdit} text="white" bg="primary">
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
            setCloseModal={setConfirmDeleteModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default BookDetails;
