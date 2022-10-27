import React, { PureComponent } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import SelectableParts from "../selectable-parts/selectable-parts";

export default class BurgerIngredients extends PureComponent {
  render() {
    const { data, cart } = this.props;
    return (
      <section className={burgerIngredientsStyles.buildBurger}>
        {this.props.children}
        <div className={burgerIngredientsStyles.menu}>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <SelectableParts data={data} type="bun" cart={cart} />
          <p className="text text_type_main-medium mt-10">Соусы</p>
          <SelectableParts data={data} type="sauce" cart={cart} />
          <p className="text text_type_main-medium mt-10">Основа</p>
          <SelectableParts data={data} type="main" cart={cart} />
        </div>
      </section>
    );
  }
}
