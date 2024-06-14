import axios from "axios";
import { getAccessToken } from "../authentication/localStorage/localStroage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
