import React, {
  useState,
  useCallback,
  memo,
  createRef,
  useEffect,
} from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { HEADER } from "../../utils/consts/headers-consts";
import BurgerIngredientsMenu from "./menu";
import Spinner from "../utils/spinner/spinner";
import SelectableParts from "./selectable-parts";
import ErrorMessage from "../utils/error-message/error-message";
import Tabs from "./tabs";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import { goodsItemTypes } from "../../utils/types/common-types";

const BurgerIngredients = memo(({ data, loading, error }) => {
  const [currentTab, setCurrentTab] = useState(MENU_TYPE.BUN);
  const refs = {
    ref_bun: createRef(),
    ref_sauce: createRef(),
    ref_main: createRef(),
  };
  const { ref_bun, ref_sauce, ref_main } = refs;
  useEffect(() => {
    const menu = document.getElementById("ingredients-menu");
    const handleMenuScroll = (e) => {
      const menuY = e.currentTarget.scrollTop;
      const bunsHeader = ref_bun.current;
      const sauceHeader = ref_sauce.current;
      const mainHeader = ref_main.current;
      if (sauceHeader && bunsHeader && mainHeader) {
        if (sauceHeader.getBoundingClientRect().top > menuY) {
          setCurrentTab(MENU_TYPE.BUN);
        } else if (mainHeader.getBoundingClientRect().bottom >= menuY) {
          setCurrentTab(MENU_TYPE.SAUCE);
        } else {
          setCurrentTab(MENU_TYPE.MAIN);
        }
      }
    };

    menu.addEventListener("scroll", (e) => handleMenuScroll(e));
    return () => {
      menu.addEventListener("scroll", (e) => handleMenuScroll(e));
    };
  });

  const onTabClick = useCallback((value, ref) => {
    setCurrentTab(value);
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
      <BurgerIngredientsMenu>
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
