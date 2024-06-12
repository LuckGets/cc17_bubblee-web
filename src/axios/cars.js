import axios from "../axios/config";

const carsApi = {};

carsApi.getCarImage = () => axios.get("/cars/image");
carsApi.getCarDetails = () => axios.get("/cars/details");

carsApi.getCarAllImage = (id) => axios.post("/cars/image", { modelId: id });

carsApi.getMainImageByCarId = (id) =>
  axios.post("/cars/main-image", { id: id });

export default carsApi;
