import React, { FC, memo, ReactNode, useMemo } from "react";
import totalStyles from "./total.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useAppSelector } from "../../../hooks/useAppSelector";

const Total: FC<{ children?: ReactNode }> = memo(({ children }) => {
  const { cart, bun } = useAppSelector((store) => store.constructor);

  const total = useMemo(() => {
    // @ts-ignore
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

export default Total;
