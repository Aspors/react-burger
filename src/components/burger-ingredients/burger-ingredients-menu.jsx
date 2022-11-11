import React, { forwardRef, memo } from "react";
import PropTypes, { objectOf } from "prop-types";
import buregerIngredientsStyles from "./burger-ingredients.module.css";
import { MENU_TYPE } from "@consts/common-consts";
import { refType } from "@types/common-types";

const BurgerIngredientsMenu = memo(
  forwardRef(({ setCurrentTab, children }, refs) => {
    const { ref_sauce, ref_main } = refs;
    const handleScroll = (e) => {
      const sauceOffset = ref_sauce.current.getBoundingClientRect().top;
      const mainOffset = ref_main.current.getBoundingClientRect().bottom;
      const menuY = e.currentTarget.scrollTop;

      if (sauceOffset > menuY) {
        setCurrentTab(MENU_TYPE.BUN);
      } else if (mainOffset > menuY) {
        setCurrentTab(MENU_TYPE.SAUCE);
      } else {
        setCurrentTab(MENU_TYPE.MAIN);
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
