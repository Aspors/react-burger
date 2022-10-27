import React, { Component } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Tabs from "../tabs/tabs";
import data from "./data";

export default class App extends Component {
  state = {
    current: "Булки",
    cart: [{ name: "Краторная булка N-200i" }],
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
          </div>
        </main>
      </div>
    );
  }
}
