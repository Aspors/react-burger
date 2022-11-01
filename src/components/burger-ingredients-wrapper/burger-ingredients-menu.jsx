import React from "react";
import buregerIngredientsMenuStyles from "./burger-ingredints-menu-styles.module.css";
import PropTypes from "prop-types";

const BuregerIngredientsMenu = ({ children }) => {
  return <div className={buregerIngredientsMenuStyles.menu}>{children}</div>;
};

buregerIngredientsMenuStyles.propTypes = {
  children: PropTypes.element,
};

export default BuregerIngredientsMenu;
