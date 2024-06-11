import axios from "../axios/config";

const carsApi = {};

carsApi.getCarImage = (id) => axios.get("/cars/image");
carsApi.getCarDetails = () => axios.get("/cars/details")

carsApi.getCarAllImage = (id) => axios.post("/cars/image", {modelId : id})

export default carsApi;
