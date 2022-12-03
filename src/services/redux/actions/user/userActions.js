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
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const RESET_LOADING = "RESET_LOADING";

export const userLogin = (data, setError, history, from) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    AuthService.login(data)
      .then(({ data }) => {
        localStorage.setItem(_refreshToken, data.refreshToken);
        setCookie(_accessToken, data.accessToken);
        history.replace(from ? from : ROUTES.HOME);
        dispatch({ type: USER_SUCCESS, payload: { user: data.user } });
      })
      .catch((e) => {
        setError("email", { message: e.response?.data?.message });
        setError("password", { message: e.response?.data?.message });
        dispatch({ type: USER_FAILED });
      });
  };
};

export const userRegister = (data, setError, history, from) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    AuthService.register(data)
      .then(({ data }) => {
        localStorage.setItem(_refreshToken, data.refreshToken);
        setCookie(_accessToken, data.accessToken);
        dispatch({ type: USER_SUCCESS, payload: { user: data.user } });
        history.replace(from ? from : ROUTES.HOME);
      })
      .catch((e) => {
        setError(FIELD_NAME.EMAIL, { message: e.response.data?.message });
        setError(FIELD_NAME.PASSWORD, { message: e.response.data?.message });
        setError(FIELD_NAME.NAME, { message: e.response.data?.message });
        console.log(e);
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

export const patchUser = (data, onError) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    UserService.patchUser(data)
      .then((res) => {
        dispatch({ type: USER_SUCCESS, payload: res?.data });
      })
      .catch((res) => {
        console.log(res);
        onError(res);
        dispatch({ type: USER_FAILED });
      });
  };
};
