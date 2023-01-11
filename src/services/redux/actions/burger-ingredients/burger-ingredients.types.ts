import {
  CHANGE_TAB,
  FAILED_BURGER_INGREDIENTS,
  REQUEST_BURGER_INGREDIENTS,
  SUCCESS_BURGER_INGREDIENTS,
  SET_MODAL_ELEMENT,
  TOGGLE_MODAL,
} from "./burger-ingredients.consts";
import TTemplateIngredient from "../../../../utils/types/common.types";

interface IREQUEST_BURGER_INGREDIENTS {
  readonly type: typeof REQUEST_BURGER_INGREDIENTS;
}

interface ISUCCESS_BURGER_INGREDIENTS {
  readonly type: typeof SUCCESS_BURGER_INGREDIENTS;
  readonly payload: TTemplateIngredient[];
}

interface IFAILED_BURGER_INGREDIENTS {
  readonly type: typeof FAILED_BURGER_INGREDIENTS;
}

interface ICHANGE_TAB {
  readonly type: typeof CHANGE_TAB;
  readonly payload: string;
}

interface ISET_MODAL_ELEMENT {
  readonly type: typeof SET_MODAL_ELEMENT;
  readonly payload: TTemplateIngredient;
}

interface ITOGGLE_MODAL {
  type: typeof TOGGLE_MODAL;
}

export type TBurgerIngredientsActions =
  | IREQUEST_BURGER_INGREDIENTS
  | ISUCCESS_BURGER_INGREDIENTS
  | IFAILED_BURGER_INGREDIENTS
  | ICHANGE_TAB
  | ISET_MODAL_ELEMENT
  | ITOGGLE_MODAL;
