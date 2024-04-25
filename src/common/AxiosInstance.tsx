import axios, { AxiosInstance } from "axios";
import { MAIN_API } from "./const.tsx";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: MAIN_API,
  headers: {
    "Content-Type": "application/json",
  },
});
