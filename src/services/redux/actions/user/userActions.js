import {
  deleteCookie,
  setCookie,
} from "../../../utils/cookie-managment/cookie-manage";
import AuthService from "../../../auth-service/auth-service";
import {
  _accessToken,
  _refreshToken,
} from "../../../../utils/consts/sevice-consts/token-names";
import UserService from "../../../user-service/user-service";
import { ROUTES } from "../../../../utils/consts/sevice-consts/routes.consts";
import { FIELD_NAME } from "../../../../utils/consts/form-consts/field-names.consts";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILED = "USER_FAILED";
export const LOGOUT = "LOGOUT";
export const SET_AUTH = "SET_AUTH";

export const userLogin = (data, setError, history) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    AuthService.login(data)
      .then(({ data }) => {
        const historyState = history?.state?.from;
        localStorage.setItem(_refreshToken, data.refreshToken);
        setCookie(_accessToken, data.accessToken);
        history.replace(historyState ? historyState : ROUTES.HOME);
        dispatch({ type: USER_SUCCESS, payload: { user: data.user } });
      })
      .catch(({ data }) => {
        setError("email", { message: data?.message });
        setError("password", { message: data?.message });
        dispatch({ type: USER_FAILED });
      });
  };
};

export const userRegister = (data, setError, history) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    AuthService.register(data)
      .then(({ data }) => {
        localStorage.setItem(_refreshToken, data.refreshToken);
        setCookie(_accessToken, data.accessToken);
        dispatch({ type: USER_SUCCESS, payload: { user: data.user } });
        history.replace(ROUTES.HOME);
      })
      .catch((e) => {
        setError(FIELD_NAME.EMAIL, { errorMessage: e.message });
        setError(FIELD_NAME.PASSWORD, { errorMessage: e.message });
        setError(FIELD_NAME.NAME, { errorMessage: e.message });
        dispatch({ type: USER_FAILED });
      });
  };
};

export const userLogOut = () => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    const refreshToken = localStorage.getItem(_refreshToken);
    AuthService.logout(refreshToken)
      .then((res) => {
        localStorage.removeItem(refreshToken);
        deleteCookie(_accessToken);
        alert(res?.data?.message);
        dispatch({ type: LOGOUT });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: USER_FAILED });
      });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    UserService.getUser()
      .then((res) => {
        dispatch({ type: USER_SUCCESS, payload: res?.data });
      })
      .catch((res) => {
        console.log(res);
        dispatch({ type: USER_FAILED });
      });
  };
};
