import React, { memo } from "react";
import PropTypes from "prop-types";
import buregerIngredientsStyles from "./burger-ingredients.module.css";

const BurgerIngredientsMenu = memo(({ children }) => {
  return (
    <div className={buregerIngredientsStyles.menu} id={"ingredients-menu"}>
      {children}
    </div>
  );
});

BurgerIngredientsMenu.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.element])
  ),
};

export default BurgerIngredientsMenu;
