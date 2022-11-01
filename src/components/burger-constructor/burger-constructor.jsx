import React, { memo } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import buregerConstructorStyles from "./burger-constructor.module.css";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import { BUTTON } from "../../utils/consts/buttons-text";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../utils/types/common-types";

const BurgerConstructor = memo((props) => {
  const { cart } = props;
  const bun = cart.find((item) => item.type === MENU_TYPE.BUN);
  return (
    <section className="pt-15 pl-3">
      <div className="pl-8 pr-3">
        <ConstructorElement
          type="top"
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <ul className={buregerConstructorStyles.constructor__menu}>
        {cart.map(({ name, price, image, type }, index) => {
          if (type === MENU_TYPE.BUN) return null;

          return (
            <li
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              key={index}>
              <DragIcon />
              <ConstructorElement
                key={index}
                text={name}
                price={price}
                thumbnail={image}
              />
            </li>
          );
        })}
      </ul>
      <div className="pl-8 pr-3">
        <ConstructorElement
          type="bottom"
          isLocked
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={buregerConstructorStyles.constructor__total}>
        <span
          style={{ display: "flex", gap: 8 }}
          className="text text_type_digits-medium">
          610 <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="submit" type="primary" size="medium">
          {BUTTON.SEND}
        </Button>
      </div>
    </section>
  );
});

BurgerConstructor.propTypes = {
  cart: PropTypes.arrayOf(goodsItemTypes),
};

export default BurgerConstructor;
