import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  burgerIngredientsReducer,
  initialBurgerState,
} from "../reducers/burger-ingredients/burger-ingredients";
import {
  constructorReducer,
  initialConstructorState,
} from "../reducers/burger-constructor/burger-constructor";

const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructor: constructorReducer,
});

const preloadedState = {
  ingredients: initialBurgerState,
  constructor: initialConstructorState,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export default store;
