import { AppError } from "@utils/AppError";
import axios from "axios";

console.log({
  api: { "Server address: ": process.env.EXPO_PUBLIC_BACKEND_API },
});

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_API,
});

api.interceptors.request.use(
  config => {
    console.log({ "INTERCEPTOR: ": config });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,

  error => {
    if (error.response ?? error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError(
          "Something went worng with the server. Please try again later."
        )
      );
    }
  }
);
