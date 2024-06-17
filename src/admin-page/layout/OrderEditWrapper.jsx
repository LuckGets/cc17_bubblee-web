import React from "react";
import { useParams } from "react-router-dom";
import reserveApi from "../../axios/reserve";
import { useEffect } from "react";
import OrderCard from "../components/OrderCard";
import { useState } from "react";
import carsApi from "../../axios/cars";
import DriverDetails from "../components/DriverDetails";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import ConfirmModal from "../components/ConfirmModal";

function OrderEditWrapper() {
  const { orderId } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  const [driver, setDriver] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [chosenDriver, setChosenDriver] = useState(null);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const navigate = useNavigate();

  const execute = async () => {
    try {
      if (!orderId) return;
      const { data } = await reserveApi.findReserveOrderDetails({
        id: +orderId,
      });
      setOrderDetail(data);
      const response = await carsApi.getUnReservedCarAndDriver({
        modelId: data.modelId,
        pickUpTime: data.pickUpTime,
        estimatedTimeToFinish: data.estimatedFinishTime,
      });
      setDriver(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickDriver = (id) => {
    setChosenDriver(id);
  };

  const handleOnAssignOrder = async () => {
    try {
      if (!chosenDriver || !orderDetail) {
        return alert("Please assign one driver to the job");
      }

      const { id } = driver.filter(
        (item) => item.driver.id === chosenDriver
      )[0];
      const { data } = await reserveApi.assignDriverToOrder(orderId, {
        carId: id,
        driverId: chosenDriver,
      });
      alert(data.message);
      setOrderDetail(null);
      execute();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnFinishJob = async () => {
    const response = confirm(
      "Please click 'confirm' again before changing the job status"
    );
    if (response) {
      const { data } = await reserveApi.finishingJob(orderId);
      alert(data.message);
      execute();
    }

    return;
  };

  const handleOnCancelJob = async () => {
    const { data } = await reserveApi.cancelJob(orderId);
    alert(data.message);
  };

  useEffect(() => {
    if (!orderDetail) {
      execute();
    }
  }, []);

  return (
    <>
      <div className="">
        <div>
          <OrderCard hovorable={false} details={orderDetail} />
        </div>
        <div
          onClick={() => setShowConfirm(true)}
          className="grid grid-cols-2 gap-5 p-5"
        >
          {orderDetail?.orderStatus === "CANCEL" ||
          orderDetail?.orderStatus === "FINISHED"
            ? null
            : driver?.map((item) => (
                <DriverDetails
                  key={item.id}
                  id={item.id}
                  orderStatus={orderDetail?.orderStatus}
                  chosenDriver={chosenDriver}
                  onClick={handleClickDriver}
                  carPlate={item.carPlate}
                  details={item.driver}
                />
              ))}
        </div>
        <div className="w-full flex justify-center items-center gap-40">
          <button
            className="p-10 bg-bubblee-light-green rounded-full text-white text-2xl"
            onClick={() => navigate("/admin/reservation")}
          >
            Back to Order page
          </button>
          {orderDetail?.orderStatus === "FINDING" ? (
            showConfirm ? (
              <>
                <button
                  onClick={handleOnAssignOrder}
                  className="text-2xl border-2 border-black rounded-xl p-10"
                >
                  ASSIGN Order ID {orderId} to Driver ID {chosenDriver}{" "}
                </button>
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    setChosenDriver(null);
                  }}
                  className="text-2xl bg-black rounded-xl p-10 text-white"
                >
                  Reset
                </button>
              </>
            ) : (
              <></>
            )
          ) : (
            <>
              <button
                onClick={handleOnFinishJob}
                className="text-2xl bg-green-500 rounded-full p-10 text-white"
              >
                FINISH THE JOB
              </button>
              <button
                onClick={() => setShowConfirmModal(true)}
                className="text-2xl rounded-full p-10 bg-red-500 text-white"
              >
                CANCEL THE JOB
              </button>
            </>
          )}
        </div>
      </div>
      {showConfirmModal && (
        <Modal width={50} bg="white">
          <ConfirmModal
            onClick={handleOnCancelJob}
            orderId={orderId}
            onClose={() => setShowConfirmModal(false)}
            execute={execute}
          />
        </Modal>
      )}
    </>
  );
}

export default OrderEditWrapper;
