import {
  SET_AUTH_CHECKED,
  LOGOUT,
  USER_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
  RESET_LOADING,
} from "../../actions/user/userActions";
import { deleteCookie } from "../../../utils/cookie-managment/cookie-manage";
import {
  _accessToken,
  _refreshToken,
} from "../../../../utils/consts/sevice-consts/token-names";

export const initialUserState = {
  isAuthChecked: false,
  isLoading: false,

  user: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        isAuthChecked: true,
        user: action.payload?.user || initialUserState.user,
        isLoading: false,
      };
    }
    case SET_AUTH_CHECKED: {
      return {
        ...state,
        isLoading: false,
        isAuthChecked: true,
      };
    }

    case RESET_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case USER_FAILED: {
      return {
        ...state,
        isAuthChecked: true,
        isLoading: false,
        user: initialUserState.user,
      };
    }
    case LOGOUT: {
      localStorage.removeItem(_refreshToken);
      deleteCookie(_accessToken);
      return {
        ...state,
        isLoading: false,
        isAuthChecked: true,
        user: initialUserState.user,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
