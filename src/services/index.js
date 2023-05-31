import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:3000",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
});
export default instance;
