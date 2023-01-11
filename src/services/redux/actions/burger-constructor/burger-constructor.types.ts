import {
  ADD_ITEM,
  CLEAR_CART,
  DELETE_ITEM,
  NEW_CART_ORDER,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SET_BUN,
  TOGGLE_CONSTRUCTOR_MODAL,
} from "./burger-constructor.consts";
import { TCart } from "../../../../utils/types/component-types/cart.types";
import { TOrder } from "../../../../utils/types/common.types";
import { TBun } from "../../../../utils/types/component-types/bun.types";

interface IADD_ITEM {
  readonly type: typeof ADD_ITEM;
  readonly payload: TCart;
}

interface IDELETE_ITEM {
  readonly type: typeof DELETE_ITEM;
  readonly payload: string;
}

interface ISET_BUN {
  readonly type: typeof SET_BUN;
  readonly payload: TBun;
}

interface INEW_CART_ORDER {
  readonly type: typeof NEW_CART_ORDER;
  readonly payload: TCart[];
}

interface ICLEAR_CART {
  readonly type: typeof CLEAR_CART;
}

interface ISEND_ORDER_REQUEST {
  readonly type: typeof SEND_ORDER_REQUEST;
}

interface ISEND_ORDER_SUCCESS {
  readonly type: typeof SEND_ORDER_SUCCESS;
  readonly payload: TOrder;
}

interface ISEND_ORDER_FAILED {
  readonly type: typeof SEND_ORDER_FAILED;
}

interface ITOGGLE_CONSTRUCTOR_MODAL {
  readonly type: typeof TOGGLE_CONSTRUCTOR_MODAL;
}

export type TBurgerConstructorActions =
  | IADD_ITEM
  | IDELETE_ITEM
  | ISET_BUN
  | INEW_CART_ORDER
  | ICLEAR_CART
  | ISEND_ORDER_REQUEST
  | ISEND_ORDER_SUCCESS
  | ISEND_ORDER_FAILED
  | ITOGGLE_CONSTRUCTOR_MODAL;
