import axios from "axios";
// import { BACKEND_BASE_URL } from "../contants";
const BACKEND_BASE_URL = "https://reqres.in/api/";

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: false,
}, );

export default axiosInstance;
