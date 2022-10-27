import React, { Component } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Tabs from "../tabs/tabs";
import data from "./data";
import BurgerConstructor from "../burger-constructor/burger-constructor";

export default class App extends Component {
  state = {
    current: "Булки",
    cart: [
      {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
      {
        _id: "60666c42cc7b410027a1a9b6",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
      },
      {
        _id: "60666c42cc7b410027a1a9b7",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0,
      },
    ],
  };

  onTabClick = (value) => {
    this.setState({ ...this.state, current: value });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <main>
          <div className={appStyles.container}>
            <BurgerIngredients data={data} cart={this.state.cart}>
              <h1 className="text text_type_main-large mb-5">
                Соберите бургер
              </h1>
              <Tabs onTabClick={this.onTabClick} current={this.state.current} />
            </BurgerIngredients>
            <BurgerConstructor cart={this.state.cart} />
          </div>
        </main>
      </div>
    );
  }
}
