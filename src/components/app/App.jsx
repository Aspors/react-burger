import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import {
  ConstructorPage,
  Auth,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
} from "../../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients/burger-ingrediens";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);
  return (
    <Router>
      <AppHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <ConstructorPage />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
