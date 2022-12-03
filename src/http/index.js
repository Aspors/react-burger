import axios from "axios";
import { _API_BASE, _TOKEN } from "../utils/consts/sevice-consts/Api-consts";
import {
  deleteCookie,
  getCookie,
  setCookie,
} from "../services/utils/cookie-managment/cookie-manage";
import {
  _accessToken,
  _refreshToken,
} from "../utils/consts/sevice-consts/token-names";

const api = axios.create({
  withCredentials: false,
  baseURL: _API_BASE,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getCookie(_accessToken)}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    console.log(error);
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      error.response?.data?.message.includes("jwt") &&
      error.config &&
      !error.config?._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(
          `${_API_BASE}${_TOKEN}`,
          { token: localStorage.getItem(_refreshToken) },
          {
            withCredentials: false,
          }
        );
        setCookie(_accessToken, response?.data?.accessToken);
        localStorage.setItem(_refreshToken, response?.data?.refreshToken);

        return api.request(originalRequest);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    deleteCookie(_accessToken);
    localStorage.removeItem(_refreshToken);
    throw error;
  }
);

export default api;
