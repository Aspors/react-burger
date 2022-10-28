import React, { PureComponent } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import buregerConstructorStyles from "./burger-constructor.module.css";

export default class BurgerConstructor extends PureComponent {
  render() {
    const { cart } = this.props;
    const bun = cart.find((item) => item.type === "bun");
    return (
      <section className="pt-15 pl-3">
        <div className="pl-8 pr-3">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={buregerConstructorStyles.constructor__menu}>
          {cart.map(({ name, price, image, type }, index) => {
            if (type !== "bun") {
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
            }
            return null;
          })}
        </ul>
        <div className="pl-8 pr-3">
          <ConstructorElement
            type="bottom"
            isLocked={true}
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
          <Button type="primary" size="medium">
            Отправить заказ
          </Button>
        </div>
      </section>
    );
  }
}
