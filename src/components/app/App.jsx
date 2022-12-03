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
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { MODAL } from "../../utils/consts/ui-consts/headers-consts";
import IngredintDetails from "../modal/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { getBurgerIngredients } from "../../services/redux/actions/burger-ingredients/burger-ingrediens";
import { useDispatch } from "react-redux";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const background = location?.state?.background;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const handleCloseModal = () => {
    history.goBack();
  };
  return (
    <>
      <AppHeader />
      <main>
        <Switch location={background || location}>
          <Route exact path={ROUTES.HOME}>
            <ConstructorPage />
          </Route>
          <Route exact path={ROUTES.INGREDIENT_DETAILS}>
            <div className={"pt-30"}>
              <IngredientDetails />
            </div>
          </Route>

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
        {background && (
          <Route path={ROUTES.INGREDIENT_DETAILS}>
            <Modal handleShowModal={handleCloseModal} header={MODAL.HEADER}>
              <IngredintDetails />
            </Modal>
          </Route>
        )}
      </main>
    </>
  );
};

export default App;
