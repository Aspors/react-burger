import {
  REQUEST_BURGER_INGREDIENTS,
  SUCCESS_BURGER_INGREDIENTS,
  FAILED_BURGER_INGREDIENTS,
  CHANGE_TAB,
  SET_MODAL_ELEMENT,
  TOGGLE_MODAL,
} from "../../actions/burger-ingredients/burger-ingrediens";

import { _ERROR, _IDLE, _LOADING } from "../../machine/machine";
import { MENU_TYPE } from "../../../utils/consts/common-consts";

const initialBurgerState = {
  status: _IDLE,

  items: [],

  activeTab: MENU_TYPE.BUN,

  modalElement: null,
  isModalActive: false,
};

export const burgerIngredientsReducer = (
  state = initialBurgerState,
  action
) => {
  switch (action.type) {
    case REQUEST_BURGER_INGREDIENTS: {
      return { ...state, status: _LOADING };
    }
    case SUCCESS_BURGER_INGREDIENTS: {
      return {
        ...state,
        items: action.payload,
        status: _IDLE,
      };
    }
    case FAILED_BURGER_INGREDIENTS: {
      return { ...state, status: _ERROR };
    }

    case CHANGE_TAB: {
      return { ...state, activeTab: action.payload };
    }

    case SET_MODAL_ELEMENT: {
      return { ...state, modalElement: action.payload };
    }

    case TOGGLE_MODAL: {
      return { ...state, isModalActive: !state.isModalActive };
    }

    default: {
      return state;
    }
  }
};
