import React, { useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useDispatch } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients/burger-ingrediens";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className={appStyles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </main>
    </div>
  );
};

export default App;
