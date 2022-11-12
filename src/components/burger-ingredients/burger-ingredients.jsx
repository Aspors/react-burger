import React, { useState, useCallback, memo, useRef } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { HEADER } from "@consts/headers-consts";
import BurgerIngredientsMenu from "./burger-ingredients-menu";
import Spinner from "../utils/spinner/spinner";
import SelectableParts from "./selectable-parts";
import ErrorMessage from "../utils/error-message/error-message";
import Tabs from "./tabs";
import { MENU_TYPE } from "@consts/common-consts";
import { goodsItemTypes } from "@types/common-types";

const BurgerIngredients = memo(({ data, loading, error }) => {
  const [currentTab, setCurrentTab] = useState(MENU_TYPE.BUN);
  const refs = {
    ref_bun: useRef(),
    ref_sauce: useRef(),
    ref_main: useRef(),
  };

  const onTabClick = useCallback((value, ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const SelectablePartsList = () => {
    return (
      <>
        <SelectableParts ref={refs.ref_bun} data={data} type={MENU_TYPE.BUN} />
        <SelectableParts
          ref={refs.ref_sauce}
          data={data}
          type={MENU_TYPE.SAUCE}
        />
        <SelectableParts
          ref={refs.ref_main}
          data={data}
          type={MENU_TYPE.MAIN}
        />
      </>
    );
  };

  const content = !(loading || error) && <SelectablePartsList />;
  const spinner = loading && !error && <Spinner />;
  const errorMessage = error && !loading && <ErrorMessage />;

  return (
    <section className={burgerIngredientsStyles.buildBurger}>
      <h1 className="text text_type_main-large mb-5">{HEADER.BUILD_BURGER}</h1>
      <Tabs refs={refs} onTabClick={onTabClick} current={currentTab} />
      <BurgerIngredientsMenu ref={refs} setCurrentTab={setCurrentTab}>
        {spinner}
        {errorMessage}
        {content}
      </BurgerIngredientsMenu>
    </section>
  );
});

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default BurgerIngredients;
