import { _ORDERS } from "../../../../utils/consts/sevice-consts/Api-consts";
import api from "../../../../http";

export const ADD_ITEM = "ADD_ITEM";
export const NEW_CART_ORDER = "NEW_CART_ORDER";
export const CLEAR_CART = "CLEAR_CART";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_BUN = "SET_BUN";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export const TOGGLE_CONSTRUCTOR_MODAL = "TOGGLE_CONSTRUCTOR_MODAL";

export const sendOrder = (formedData) => {
  return async (dispatch) => {
    dispatch({ type: SEND_ORDER_REQUEST });
    try {
      const res = await api.post(_ORDERS, formedData);
      if (res?.data && res?.data?.success) {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          payload: { number: res.data.order.number, name: res.data.name },
        });
      } else {
        dispatch({ type: SEND_ORDER_FAILED });
        return new Error(res.data.message);
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: SEND_ORDER_FAILED });
      throw new Error(e);
    }
  };
};
