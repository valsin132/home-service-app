import axios, { AxiosError, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
};

// const { PROD } = import.meta.env;

// const baseURL = PROD ? import.meta.env.VITE_SERVER_URL : "http://localhost:3000/";

// const config: AxiosRequestConfig = {
//   baseURL,
// };  for vercel deployment

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
