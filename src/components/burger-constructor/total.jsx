import React, { memo, useContext, useMemo } from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CartDataContext } from "../../contexts/cartDataContext";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import PropTypes from "prop-types";

const Total = memo(({ children }) => {
  const { cart } = useContext(CartDataContext);
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        (item.type === MENU_TYPE.BUN ? item.price * 2 : item.price) + sum,
      0
    );
  }, [cart]);
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

Total.propTypes = {
  children: PropTypes.element,
};

export default Total;
