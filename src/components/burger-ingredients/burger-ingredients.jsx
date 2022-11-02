import React from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { HEADER } from "../../utils/consts/headers-consts";

const BurgerIngredients = (props) => {
  const { children } = props;
  return (
    <section className={burgerIngredientsStyles.buildBurger}>
      <h1 className="text text_type_main-large mb-5">{HEADER.BUILD_BURGER}</h1>
      {children}
    </section>
  );
};

BurgerIngredients.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default BurgerIngredients;
