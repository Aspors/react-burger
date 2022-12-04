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
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../modal/order-details/order-details";
import { CLEAR_CART } from "../../services/redux/actions/burger-constructor/burger-constructor";
import Page404 from "../../pages/page404/page404";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const background = location?.state?.background;
  const orderBackground = location?.state?.orderBackground;
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const handleCloseModal = () => {
    history.goBack();
  };

  const handleCloseOrderModal = () => {
    dispatch({ type: CLEAR_CART });
    history.goBack();
  };
  return (
    <>
      <AppHeader />
      <main>
        <Switch location={background || (user && orderBackground) || location}>
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
          {!isLoading && !orderBackground && (
            <Route path="*">
              <Page404 />
            </Route>
          )}
        </Switch>
        {background && (
          <Route exact path={ROUTES.INGREDIENT_DETAILS}>
            <Modal handleShowModal={handleCloseModal} header={MODAL.HEADER}>
              <IngredintDetails />
            </Modal>
          </Route>
        )}
        {orderBackground && (
          <ProtectedRoute exact path={ROUTES.ORDER_DETAILS}>
            <Modal handleShowModal={handleCloseOrderModal}>
              <OrderDetails handleShowModal={handleCloseOrderModal} />
            </Modal>
          </ProtectedRoute>
        )}
      </main>
    </>
  );
};

export default App;
