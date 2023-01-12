import {
  ADD_ITEM,
  SET_BUN,
  DELETE_ITEM,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  TOGGLE_CONSTRUCTOR_MODAL,
  NEW_CART_ORDER,
  CLEAR_CART,
} from "../../actions/burger-constructor/burger-constructor.consts";
import { _ERROR, _IDLE, _LOADING } from "../../../utils/machine/machine";
import { TBurgerConstructorActions } from "../../actions/burger-constructor/burger-constructor.types";
import { TCart } from "../../../../utils/types/component-types/cart.types";
import { TBun } from "../../../../utils/types/component-types/bun.types";
import { TOrder } from "../../../../utils/types/common.types";

export interface IConstructorState {
  readonly cart: TCart[];
  readonly bun: TBun | null;

  readonly orderStatus: typeof _IDLE | typeof _ERROR | typeof _LOADING;
  readonly order: TOrder | null;

  readonly isModalActive: boolean;
}

export const initialConstructorState: IConstructorState = {
  cart: [],
  bun: null,

  orderStatus: _IDLE,
  order: null,

  isModalActive: false,
};

export const constructorReducer = (
  state = initialConstructorState,
  action: TBurgerConstructorActions
): IConstructorState => {
  switch (action.type) {
    case ADD_ITEM: {
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.key !== action.payload),
      };
    }

    case SET_BUN: {
      return { ...state, bun: action.payload };
    }

    case NEW_CART_ORDER: {
      return { ...state, cart: action.payload };
    }

    case CLEAR_CART: {
      return { ...state, cart: [], bun: null };
    }

    case SEND_ORDER_REQUEST: {
      return { ...state, orderStatus: _LOADING };
    }

    case SEND_ORDER_SUCCESS: {
      return { ...state, orderStatus: _IDLE, order: action.payload };
    }

    case SEND_ORDER_FAILED: {
      return { ...state, orderStatus: _ERROR, order: null };
    }

    case TOGGLE_CONSTRUCTOR_MODAL: {
      return { ...state, isModalActive: !state.isModalActive };
    }
    default: {
      return state;
    }
  }
};