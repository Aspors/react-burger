import React, { memo, useCallback, forwardRef } from "react";
import burgerCardsStyles from "./burger-cards.module.css";
import { MENU_TYPE_TRANSLATION } from "../../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../../utils/types/common-types";
import { useSelector } from "react-redux";

import BurgerCard from "../burger-card/burger-card";

const BurgerCards = memo(
  forwardRef(({ data, type }, ref) => {
    const { cart, bun } = useSelector((store) => store.constructor);

    const countItemsAmount = useCallback(
      (id) => {
        return cart.filter(({ _id }) => _id === id).length;
      },
      [cart]
    );

    return (
      <>
        <span
          ref={ref}
          className={
            "text text_type_main-medium mb-6 " + burgerCardsStyles.partsName
          }
        >
          {MENU_TYPE_TRANSLATION[type]}
        </span>
        <ul className={burgerCardsStyles["menu__items"]}>
          {data.map((item) => {
            if (item.type !== type) return null;
            const itemsAmount = countItemsAmount(item._id);
            return (
              <BurgerCard
                key={item._id}
                item={item}
                bun={bun}
                itemsAmount={itemsAmount}
              />
            );
          })}
        </ul>
      </>
    );
  })
);

BurgerCards.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes).isRequired,
  cart: PropTypes.arrayOf(goodsItemTypes),
  isModalActive: PropTypes.bool,
  bun: PropTypes.oneOfType([PropTypes.object, goodsItemTypes]),
  type: PropTypes.string.isRequired,
};

export default BurgerCards;
