import { _ERROR, _IDLE, _LOADING } from "../../../utils/machine/machine";
import { MENU_TYPE } from "../../../../utils/consts/common-consts";
import { TBurgerIngredientsActions } from "../../actions/burger-ingredients/burger-ingredients.types";
import {
  CHANGE_TAB,
  FAILED_BURGER_INGREDIENTS,
  REQUEST_BURGER_INGREDIENTS,
  SET_MODAL_ELEMENT,
  SUCCESS_BURGER_INGREDIENTS,
  TOGGLE_MODAL,
} from "../../actions/burger-ingredients/burger-ingredients.consts";
import TTemplateIngredient from "../../../../utils/types/common.types";

export interface IInitialBurgerState {
  readonly status: typeof _LOADING | typeof _IDLE | typeof _ERROR;

  readonly items: TTemplateIngredient[];

  readonly activeTab:
    | typeof MENU_TYPE.BUN
    | typeof MENU_TYPE.MAIN
    | typeof MENU_TYPE.SAUCE;

  modalElement: TTemplateIngredient | null;

  readonly isModalActive: boolean;
}

export const initialBurgerState: IInitialBurgerState = {
  status: _LOADING,

  items: [],

  activeTab: MENU_TYPE.BUN,

  modalElement: null,

  isModalActive: false,
};

export const burgerIngredientsReducer = (
  state = initialBurgerState,
  action: TBurgerIngredientsActions
): IInitialBurgerState => {
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
