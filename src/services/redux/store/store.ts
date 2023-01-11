import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  burgerIngredientsReducer,
  initialBurgerState,
} from "../reducers/burger-ingredients/burger-ingredients";
import {
  constructorReducer,
  initialConstructorState,
} from "../reducers/burger-constructor/burger-constructor";
import userReducer, { initialUserState } from "../reducers/user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  ingredients: burgerIngredientsReducer,
  constructor: constructorReducer,
});

const preloadedState = {
  user: initialUserState,
  ingredients: initialBurgerState,
  constructor: initialConstructorState,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;

export default store;
