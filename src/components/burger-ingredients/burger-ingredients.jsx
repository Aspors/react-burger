import React, { memo, useRef } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

import BurgerIngredientsMenu from "./burger-ingredients-menu/burger-ingredients-menu";
import BurgerCards from "./burger-cards/burger-cards";
import Tabs from "./tabs/tabs";
import { setContent } from "../../services/utils/machine/machine";

import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TAB } from "../../services/redux/actions/burger-ingredients/burger-ingrediens";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import { HEADER } from "../../utils/consts/ui-consts/headers-consts";
import { goodsItemTypes } from "../../utils/types/common-types";

const BurgerIngredients = memo(() => {
  const { items, status, activeTab } = useSelector(
    (store) => store.ingredients
  );
  const dispatch = useDispatch();

  const refs = [useRef(), useRef(), useRef()];

  const [ref_bun, ref_sauce, ref_main] = refs;

  const handleScroll = (e) => {
    const sauceOffset = ref_sauce.current?.getBoundingClientRect().top;
    const mainOffset = ref_main.current?.getBoundingClientRect().bottom;
    const menuY = e.currentTarget.scrollTop;

    if (sauceOffset > menuY && activeTab !== MENU_TYPE.BUN) {
      dispatch({ type: CHANGE_TAB, payload: MENU_TYPE.BUN });
    }
    if (
      mainOffset > menuY &&
      sauceOffset < menuY &&
      activeTab !== MENU_TYPE.SAUCE
    ) {
      dispatch({ type: CHANGE_TAB, payload: MENU_TYPE.SAUCE });
    }
    if (
      mainOffset < menuY &&
      activeTab !== MENU_TYPE.MAIN &&
      activeTab !== MENU_TYPE.MAIN
    ) {
      dispatch({ type: CHANGE_TAB, payload: MENU_TYPE.MAIN });
    }
  };

  const View = () => {
    return (
      <>
        <BurgerCards ref={ref_bun} data={items} type={MENU_TYPE.BUN} />
        <BurgerCards ref={ref_sauce} data={items} type={MENU_TYPE.SAUCE} />
        <BurgerCards ref={ref_main} data={items} type={MENU_TYPE.MAIN} />
      </>
    );
  };

  const content = setContent(status);

  return (
    <section className={burgerIngredientsStyles.buildBurger}>
      <h1 className="text text_type_main-large mb-5">{HEADER.BUILD_BURGER}</h1>
      <Tabs refs={refs} />
      <BurgerIngredientsMenu handleScroll={handleScroll}>
        {content ? content : <View />}
      </BurgerIngredientsMenu>
    </section>
  );
});

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes),
  items: PropTypes.arrayOf(goodsItemTypes),
  status: PropTypes.string,
  activeTab: PropTypes.string,
};

export default BurgerIngredients;
