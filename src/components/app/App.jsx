import React, { useCallback, useState } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Tabs from "../tabs/tabs";
import { data, initialCart } from "./data";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BuregerIngredientsMenu from "../burger-ingredients-wrapper/burger-ingredients-menu";
import SelectableParts from "../selectable-parts/selectable-parts";
import { MENU_TYPE } from "../../utils/consts/common-consts";

const App = () => {
  const initialState = {
    current: MENU_TYPE.BUN,
    cart: initialCart,
  };

  const [state, setState] = useState(initialState);
  const { cart, current } = state;

  const onTabClick = useCallback((value) => {
    setState((state) => ({ ...state, current: value }));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className={appStyles.container}>
          <BurgerIngredients>
            <Tabs onTabClick={onTabClick} current={current} />
            <BuregerIngredientsMenu>
              <SelectableParts data={data} type={MENU_TYPE.BUN} cart={cart} />
              <SelectableParts data={data} type={MENU_TYPE.SAUCE} cart={cart} />
              <SelectableParts data={data} type={MENU_TYPE.MAIN} cart={cart} />
            </BuregerIngredientsMenu>
          </BurgerIngredients>
          <BurgerConstructor cart={cart} />
        </div>
      </main>
    </div>
  );
};

export default App;
