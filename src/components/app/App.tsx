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
import CustomRoute from "../utils/custom-route/custom-route";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { MODAL } from "../../utils/consts/ui-consts/headers-consts";
import Modal from "../modal/modal";
import { getBurgerIngredients } from "../../services/redux/actions/burger-ingredients/burger-ingrediens";
import { useSelector } from "react-redux";
import OrderDetails from "../modal/order-details/order-details";
import Page404 from "../../pages/page404/page404";
import useAuthCheck from "../../hooks/useAuthCheck";
import { TUser } from "../../utils/types/common.types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Location } from "history";
import { CLEAR_CART } from "../../services/redux/actions/burger-constructor/burger-constructor.consts";

const App = () => {
  const location = useLocation<Location & { [key: string]: Location }>();
  const history = useHistory();
  const background = location?.state?.background;
  const orderBackground = location?.state?.orderBackground;
  const dispatch = useAppDispatch();
  const { user, isLoading } = useSelector<
    any,
    { user: TUser; isLoading: boolean }
  >((store) => store.user);
  const { authCheck } = useAuthCheck();
  useEffect(() => {
    dispatch(getBurgerIngredients());
    authCheck();
    // eslint-disable-next-line
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

          <CustomRoute exact path={ROUTES.PROFILE} isProtected>
            <Profile />
          </CustomRoute>
          <CustomRoute exact path={ROUTES.LOGIN}>
            <Auth />
          </CustomRoute>
          <CustomRoute exact path={ROUTES.REGISTER}>
            <Register />
          </CustomRoute>
          <CustomRoute exact path={ROUTES.FORGOT_PASSWORD}>
            <ForgotPassword />
          </CustomRoute>
          <CustomRoute exact path={ROUTES.RESET_PASSWORD}>
            <ResetPassword />
          </CustomRoute>
          {!isLoading && !orderBackground && (
            <Route path="*">
              <Page404 />
            </Route>
          )}
        </Switch>
        {background && (
          <Route exact path={ROUTES.INGREDIENT_DETAILS}>
            <Modal handleShowModal={handleCloseModal} header={MODAL.HEADER}>
              <IngredientDetails />
            </Modal>
          </Route>
        )}
        {orderBackground && (
          <CustomRoute exact path={ROUTES.ORDER_DETAILS} isProtected>
            <Modal handleShowModal={handleCloseOrderModal}>
              <OrderDetails handleShowModal={handleCloseOrderModal} />
            </Modal>
          </CustomRoute>
        )}
      </main>
    </>
  );
};

export default App;
