import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient