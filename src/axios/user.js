import axios from "./config";

const userApi = {}

userApi.getUser = () => axios.get("/users")

export default userApi