import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { burgerIngredientsReducer } from "../reducers/burger-ingredients/burger-ingredients";
import { constructorReducer } from "../reducers/burger-constructor/burger-constructor";
import userReducer from "../reducers/user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  ingredients: burgerIngredientsReducer,
  constructor: constructorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
