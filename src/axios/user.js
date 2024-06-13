import { useActionData } from "react-router-dom";
import axios from "./config";

const userApi = {};

userApi.getUser = () => axios.get("/users");
userApi.findUser = (data) => axios.post("/users/find", data);

userApi.ComparePassword = (password) => axios.post("/users/compare", password);
export default userApi;
