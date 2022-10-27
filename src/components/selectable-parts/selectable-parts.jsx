import React, { PureComponent } from "react";
import selectablePartsStyles from "./selectable-parts.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class SelectableParts extends PureComponent {
  menuSections = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Основа",
  };

  render() {
    const { data, type } = this.props;
    return (
      <div className={selectablePartsStyles["menu__items"]}>
        {data.map((item, index) => {
          if (item.type === type) {
            return (
              <div
                tabIndex={0}
                key={item._id}
                className={selectablePartsStyles.menu__item}>
                <img src={item.image} alt={type} className="menu__item-img" />
                <span
                  className={
                    "text text_type_digits-default " +
                    selectablePartsStyles["menu__item-price"]
                  }>
                  {item.price}
                  <CurrencyIcon type="primary" />
                </span>
                <span
                  className="text text_type_main-small"
                  style={{ textAlign: "center" }}>
                  {item.name}
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
