import { _ORDERS } from "../../../../utils/consts/sevice-consts/Api-consts";
import api from "../../../../http";
import { AppDispatch } from "../../store/store";
import {
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
} from "./burger-constructor.consts";

export const sendOrder = (formedData: { ingredients: string[] }) => {
  return async (dispatch: AppDispatch) => {
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
    } catch (e: any) {
      console.log(e);
      dispatch({ type: SEND_ORDER_FAILED });
      throw new Error(e);
    }
  };
};
