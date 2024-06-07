import axios from "./config";

const authenApi = {};

authenApi.register = (data) => axios.post("/auth/register", data);
authenApi.login = (data) => axios.post("/auth/login", data);

export default authenApi
