import TTemplateIngredient from "../../../utils/types/common.types";
import { TBun } from "../../../utils/types/component-types/bun.types";

export default interface IBurgerCard {
  item: TTemplateIngredient;
  bun: TBun;
  itemsAmount: number;
}
