import React, { memo, useRef } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { HEADER } from "@consts/headers-consts";
import BurgerIngredientsMenu from "./burger-ingredients-menu";
import BurgerCards from "./burger-cards";
import Tabs from "./tabs";
import { setContent } from "../../services/machine/machine";
import { MENU_TYPE } from "@consts/common-consts";
import { goodsItemTypes } from "@types/common-types";
import { useSelector } from "react-redux";

const BurgerIngredients = memo(() => {
  const { items, status } = useSelector((store) => store.ingredients);

  const refs = {
    ref_bun: useRef(),
    ref_sauce: useRef(),
    ref_main: useRef(),
  };

  const View = () => {
    return (
      <>
        <BurgerCards ref={refs.ref_bun} data={items} type={MENU_TYPE.BUN} />
        <BurgerCards ref={refs.ref_sauce} data={items} type={MENU_TYPE.SAUCE} />
        <BurgerCards ref={refs.ref_main} data={items} type={MENU_TYPE.MAIN} />
      </>
    );
  };

  const content = setContent(status, View);

  return (
    <section className={burgerIngredientsStyles.buildBurger}>
      <h1 className="text text_type_main-large mb-5">{HEADER.BUILD_BURGER}</h1>
      <Tabs refs={refs} />
      <BurgerIngredientsMenu ref={refs}>{content}</BurgerIngredientsMenu>
    </section>
  );
});

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes),
};

export default BurgerIngredients;
