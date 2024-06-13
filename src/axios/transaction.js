import axios from "./config";

const transactionAPi = {};

transactionAPi.createTransactionOrder = (data) =>
  axios.post("/transaction/create", data);

export default transactionAPi;
