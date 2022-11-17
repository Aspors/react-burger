import { _API_BASE, _INGREDIENTS } from "../../../utils/consts/Api-consts";

export const REQUEST_BURGER_INGREDIENTS = "REQUEST_BURGER_INGREDIENTS";
export const SUCCESS_BURGER_INGREDIENTS = "SUCCESS_BURGER_INGREDIENTS";
export const FAILED_BURGER_INGREDIENTS = "FAILED_BURGER_INGREDIENTS";
export const CHANGE_TAB = "CHANGE_TAB";
export const SET_MODAL_ELEMENT = "SET_MODAL_ELEMENT";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export function getBurgerIngredients() {
  return async (dispatch) => {
    dispatch({ type: REQUEST_BURGER_INGREDIENTS });
    try {
      const res = await fetch(`${_API_BASE}${_INGREDIENTS}`).then((res) =>
        res.json()
      );
      if (res && res.success) {
        dispatch({
          type: SUCCESS_BURGER_INGREDIENTS,
          payload: res.data,
        });
      } else {
        dispatch({ type: FAILED_BURGER_INGREDIENTS });
      }
    } catch (e) {
      dispatch({ type: FAILED_BURGER_INGREDIENTS });
      throw new Error(e);
    }
  };
}
