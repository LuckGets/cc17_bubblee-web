import axios from "./config";

const reserveApi = {};

reserveApi.createReserveOrder = (data) => axios.post("/reserve/create", data);

reserveApi.findReserveOrderDetails = (data) =>
  axios.post("/reserve/details", data);

reserveApi.findReserveOrderDetailsByOrderIdEmailAndPhone = (data) =>
  axios.post("/reserve/finddetail", data);

reserveApi.findReserveHistoryByUserId = () => axios.get("/reserve/history");

reserveApi.findUserIdByOrderId = (orderId) =>
  axios.get(`/reserve/user/${orderId}`);

reserveApi.cancelOrder = (orderId) =>
  axios.delete(`/reserve/history/${orderId}`);

reserveApi.getAllUnReservedOrder = () => axios.get("/reserve/history/all");

reserveApi.assignDriverToOrder = (orderId, data) =>
  axios.patch(`/reserve/assign/${orderId}`, data);

export default reserveApi;
