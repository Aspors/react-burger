import React, { memo, SyntheticEvent, useRef } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import BurgerIngredientsMenu from "./burger-ingredients-menu/burger-ingredients-menu";
import BurgerCards from "./burger-cards/burger-cards";
import Tabs from "./tabs/tabs";

import { setContent } from "../../services/utils/machine/machine";

import { useDispatch, useSelector } from "react-redux";

import { MENU_TYPE } from "../../utils/consts/common-consts";
import { HEADER } from "../../utils/consts/ui-consts/headers-consts";
import TTemplateIngredient from "../../utils/types/common.types";
import { CHANGE_TAB } from "../../services/redux/actions/burger-ingredients/burger-ingredients.consts";

const BurgerIngredients = memo(() => {
  const { items, status, activeTab } = useSelector<
    any,
    { items: TTemplateIngredient[]; status: string; activeTab: string }
  >((store) => store.ingredients);
  const dispatch = useDispatch();

  const refs: Array<React.MutableRefObject<HTMLSpanElement | null>> = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [ref_bun, ref_sauce, ref_main] = refs;

  const handleScroll = (e: SyntheticEvent) => {
    const sauceOffset = ref_sauce?.current?.getBoundingClientRect().top || 0;
    const mainOffset = ref_main?.current?.getBoundingClientRect().bottom || 0;
    const menuY = e.currentTarget.scrollTop || 0;

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

export default BurgerIngredients;
