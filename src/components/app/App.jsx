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
import ProtectedRoute from "../utils/protected-route/protected-route";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Switch>
          <ProtectedRoute exact path={ROUTES.HOME}>
            <ConstructorPage />
          </ProtectedRoute>
          <ProtectedRoute exact path={ROUTES.PROFILE}>
            <Profile />
          </ProtectedRoute>
          <Route exact path={ROUTES.LOGIN}>
            <Auth />
          </Route>
          <Route exact path={ROUTES.REGISTER}>
            <Register />
          </Route>
          <Route exact path={ROUTES.FORGOT_PASSWORD}>
            <ForgotPassword />
          </Route>
          <Route exact path={ROUTES.RESET_PASSWORD}>
            <ResetPassword />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
