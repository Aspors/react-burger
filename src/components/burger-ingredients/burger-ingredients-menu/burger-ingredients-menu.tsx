import React, { FC, memo } from "react";
import burgerIngredientsMenuStyles from "./burger-ingredients-menu.module.css";
import IBurgerMenu from "./burger-ingredients.type";

const BurgerIngredientsMenu: FC<IBurgerMenu> = memo(
  ({ children, handleScroll }) => {
    return (
      <div
        onScroll={(e) => handleScroll(e)}
        className={burgerIngredientsMenuStyles.menu}
      >
        {children}
      </div>
    );
  }
);

export default BurgerIngredientsMenu;
