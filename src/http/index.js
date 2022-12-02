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
import store from "../services/redux/store/store";
import {
  SET_AUTH,
  USER_FAILED,
  USER_REQUEST,
  userLogOut,
} from "../services/redux/actions/user/userActions";

const token = getCookie(_accessToken);
const refreshToken = localStorage.getItem(_refreshToken);
const api = axios.create({
  withCredentials: false,
  baseURL: _API_BASE,
});
if (token) {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
}

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config?._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        store.dispatch({ type: USER_REQUEST });
        const response = await axios.post(
          `${_API_BASE}${_TOKEN}`,
          { token: refreshToken },
          {
            withCredentials: false,
          }
        );
        setCookie(_accessToken, response.data.accessToken);
        store.dispatch({ type: SET_AUTH });
        return api.request(originalRequest);
      } catch (e) {
        store.dispatch({ type: USER_FAILED });
        console.log(e);
        throw new Error(e);
      }
    }

    throw error;
  }
);

export default api;
