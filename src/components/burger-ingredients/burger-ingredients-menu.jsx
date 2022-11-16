import React, { forwardRef, memo } from "react";
import PropTypes, { objectOf } from "prop-types";
import buregerIngredientsStyles from "./burger-ingredients.module.css";
import { MENU_TYPE } from "@consts/common-consts";
import { refType } from "@types/common-types";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TAB } from "../../services/actions/burger-ingredients/burger-ingrediens";

const BurgerIngredientsMenu = memo(
  forwardRef(({ children }, refs) => {
    const { ref_sauce, ref_main } = refs;
    const dispatch = useDispatch();
    const { activeTab } = useSelector((store) => store.ingredients);

    const handleScroll = (e) => {
      const sauceOffset = ref_sauce.current.getBoundingClientRect().top;
      const mainOffset = ref_main.current.getBoundingClientRect().bottom;
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
    return (
      <div
        onScroll={(e) => handleScroll(e)}
        className={buregerIngredientsStyles.menu}
      >
        {children}
      </div>
    );
  })
);

BurgerIngredientsMenu.propTypes = {
  setCurrentTab: PropTypes.func,
  refs: objectOf(refType),
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.element])
  ),
};

export default BurgerIngredientsMenu;
