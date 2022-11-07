import React, { useCallback, useEffect, useState } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Tabs from "../tabs/tabs";
import { initialCart } from "./data";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BuregerIngredientsMenu from "../burger-ingredients-wrapper/burger-ingredients-menu";
import SelectableParts from "../selectable-parts/selectable-parts";
import { MENU_TYPE } from "../../utils/consts/common-consts";
import Spinner from "../utils/spinner/spinner";
import ErrorMessage from "../utils/error-message/error-message";
import useNormaService from "../../services/useNormaService";

const App = () => {
  const initialState = {
    data: [],
    current: MENU_TYPE.BUN,
    cart: initialCart,
  };
  const { getAllIngredients, loading, error } = useNormaService();
  const [state, setState] = useState(initialState);
  const { data, cart, current } = state;

  useEffect(() => {
    getAllIngredients().then((res) => setState({ ...state, data: res.data }));
    // eslint-disable-next-line
  }, []);

  const onTabClick = useCallback((value) => {
    setState((state) => ({ ...state, current: value }));
  }, []);

  const SelectablePartsList = () => {
    return (
      <>
        <SelectableParts data={data} type={MENU_TYPE.BUN} cart={cart} />
        <SelectableParts data={data} type={MENU_TYPE.SAUCE} cart={cart} />
        <SelectableParts data={data} type={MENU_TYPE.MAIN} cart={cart} />
      </>
    );
  };

  const content = !(loading || error) && <SelectablePartsList />;
  const spinner = loading && !error && <Spinner />;
  const errorMessage = error && !loading && <ErrorMessage />;

  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className={appStyles.container}>
          <BurgerIngredients>
            <Tabs onTabClick={onTabClick} current={current} />
            <BuregerIngredientsMenu>
              {spinner}
              {errorMessage}
              {content}
            </BuregerIngredientsMenu>
          </BurgerIngredients>
          <BurgerConstructor cart={cart} />
        </div>
      </main>
    </div>
  );
};

export default App;
