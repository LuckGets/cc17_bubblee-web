import axios from "./config";

const reserveApi = {};

reserveApi.createReserveOrder = (data) => axios.post("/reserve/create", data);

reserveApi.findReserveOrderDetails = (data) =>
  axios.post("/reserve/details", data);

export default reserveApi;
