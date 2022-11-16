import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { burgerIngredientsReducer } from "../reducers/burger-ingredients/burger-ingredients";
import { constructorReducer } from "../reducers/burger-constructor/burger-constructor";
import { _IDLE } from "../machine/machine";
import { MENU_TYPE } from "../../utils/consts/common-consts";

const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructor: constructorReducer,
});

const preloadedState = {
  ingredients: {
    status: _IDLE,

    items: [],

    activeTab: MENU_TYPE.BUN,

    modalElement: null,
    isModalActive: false,
  },
  constructor: {
    cart: [],
    bun: null,

    orderStatus: _IDLE,
    order: {},

    isModalActive: false,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

export default store;
