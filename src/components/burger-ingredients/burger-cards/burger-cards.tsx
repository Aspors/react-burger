import React, { memo, useCallback, forwardRef } from "react";
import burgerCardsStyles from "./burger-cards.module.css";
import { MENU_TYPE_TRANSLATION } from "../../../utils/consts/common-consts";
import BurgerCard from "../burger-card/burger-card";
import IBurgerCards from "./burger-cards.types";
import { useAppSelector } from "../../../hooks/useAppSelector";

const BurgerCards = memo(
  forwardRef<HTMLSpanElement, IBurgerCards>(({ data, type }, ref) => {
    const { cart, bun } = useAppSelector((store) => store.constructor);

    const countItemsAmount = useCallback(
      (id: string) => {
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

export default BurgerCards;
