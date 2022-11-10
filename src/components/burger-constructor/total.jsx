import React, { memo, useCallback, useContext } from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CartDataContext } from "../../contexts/cartDataContext";
import { MENU_TYPE } from "../../utils/consts/common-consts";

const Total = memo(({ children }) => {
  const { cart } = useContext(CartDataContext);
  const countPrice = useCallback(() => {
    return cart.reduce(
      (sum, item) =>
        (item.type === MENU_TYPE.BUN ? item.price * 2 : item.price) + sum,
      0
    );
  }, [cart]);
  const total = countPrice();
  return (
    <div className={burgerConstructorStyles.constructor__total}>
      <span
        style={{ display: "flex", gap: 8 }}
        className="text text_type_digits-medium"
      >
        {total}
        <CurrencyIcon type="primary" />
      </span>
      {children}
    </div>
  );
});

export default Total;
