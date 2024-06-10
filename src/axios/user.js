import axios from "./config";

const userApi = {};

userApi.getUser = () => axios.get("/users");
userApi.findUser = (data) => axios.post("/users/find", data);
export default userApi;
