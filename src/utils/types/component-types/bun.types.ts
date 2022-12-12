import TTemplateIngredient from "../common.types";

export interface IEmptyBun {
  type: string;
  isHover: boolean;
}

export type TBun = TTemplateIngredient & { type: "bun" };

export interface IBun {
  type: "top" | "bottom";
  bun: TBun | null;
}
