import React, { memo } from "react";
import PropTypes from "prop-types";
import buregerIngredientsStyles from "./burger-ingredients.module.css";

const BurgerIngredientsMenu = memo(({ children, handleScroll }) => {
  return (
    <div
      onScroll={(e) => handleScroll(e)}
      className={buregerIngredientsStyles.menu}
    >
      {children}
    </div>
  );
});

BurgerIngredientsMenu.propTypes = {
  handleScroll: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
};

export default BurgerIngredientsMenu;
