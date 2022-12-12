import { ReactNode, SyntheticEvent } from "react";

export default interface IBurgerMenu {
  children?: ReactNode;
  handleScroll: (e: SyntheticEvent) => void;
}
