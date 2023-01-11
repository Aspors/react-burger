import api from "../../../../http";
import { _INGREDIENTS } from "../../../../utils/consts/sevice-consts/Api-consts";
import {
  FAILED_BURGER_INGREDIENTS,
  REQUEST_BURGER_INGREDIENTS,
  SUCCESS_BURGER_INGREDIENTS,
} from "./burger-ingredients.consts";
import { AppDispatch } from "../../store/store";

export function getBurgerIngredients() {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: REQUEST_BURGER_INGREDIENTS });
    try {
      const { data } = await api.get(_INGREDIENTS);
      if (data && data.success) {
        dispatch({
          type: SUCCESS_BURGER_INGREDIENTS,
          payload: data.data,
        });
      } else {
        dispatch({ type: FAILED_BURGER_INGREDIENTS });
        return new Error(data?.message);
      }
    } catch (e: any) {
      dispatch({ type: FAILED_BURGER_INGREDIENTS });
      throw new Error(e);
    }
  };
}
