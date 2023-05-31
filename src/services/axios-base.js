import axios from "axios";
import { isBrowser } from "../utils";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Request-Headers": "*",
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = isBrowser && localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
