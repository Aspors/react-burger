import React, { memo, useMemo } from "react";
import totalStyles from "./total.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Total = memo(({ children }) => {
  const { cart, bun } = useSelector((store) => store.constructor);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => item.price + sum, 0) + (bun && bun.price);
  }, [cart, bun]);
  return (
    <div className={totalStyles.constructor__total}>
      <span className="text text_type_digits-medium">
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
