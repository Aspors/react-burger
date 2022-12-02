import api from "../../../../http";
import { _INGREDIENTS } from "../../../../utils/consts/sevice-consts/Api-consts";

export var REQUEST_BURGER_INGREDIENTS = "REQUEST_BURGER_INGREDIENTS";
export var SUCCESS_BURGER_INGREDIENTS = "SUCCESS_BURGER_INGREDIENTS";
export var FAILED_BURGER_INGREDIENTS = "FAILED_BURGER_INGREDIENTS";
export var CHANGE_TAB = "CHANGE_TAB";
export var SET_MODAL_ELEMENT = "SET_MODAL_ELEMENT";

export var TOGGLE_MODAL = "TOGGLE_MODAL";

export function getBurgerIngredients() {
  return async (dispatch) => {
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
    } catch (e) {
      dispatch({ type: FAILED_BURGER_INGREDIENTS });
      throw new Error(e);
    }
  };
}
