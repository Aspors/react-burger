import {
  SET_AUTH,
  LOGOUT,
  USER_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
} from "../../actions/user/userActions";
import { _IDLE, _LOADING } from "../../../utils/machine/machine";
import { deleteCookie } from "../../../utils/cookie-managment/cookie-manage";
import {
  _accessToken,
  _refreshToken,
} from "../../../../utils/consts/sevice-consts/token-names";

export const initialUserState = {
  isAuth: false,
  status: _IDLE,
  user: {
    name: "",
    email: "",
  },
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_REQUEST: {
      return { ...state, status: _LOADING };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        user: action.payload?.user || state.user,
        isAuth: true,
        status: _IDLE,
      };
    }
    case SET_AUTH: {
      return {
        ...state,
        status: _IDLE,
        isAuth: true,
      };
    }

    case USER_FAILED: {
      return {
        ...state,
        isAuth: false,
        status: _IDLE,
        user: initialUserState.user,
      };
    }
    case LOGOUT: {
      localStorage.removeItem(_refreshToken);
      deleteCookie(_accessToken);
      return {
        ...state,
        status: _IDLE,
        isAuth: false,
        user: initialUserState.user,
      };
    }
    default: {
      return initialUserState;
    }
  }
};

export default userReducer;
