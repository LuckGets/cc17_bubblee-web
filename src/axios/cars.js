import axios from "../axios/config";

const carsApi = {};

carsApi.getCarImage = (id) => axios.get("/cars/image");

export default carsApi;
