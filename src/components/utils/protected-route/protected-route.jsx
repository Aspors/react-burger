import { Redirect, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Spinner from "../spinner/spinner";
import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";
import useAuthCheck from "../../../hooks/useAuthCheck";
import { _refreshToken } from "../../../utils/consts/sevice-consts/token-names";
import { SET_AUTH_CHECKED } from "../../../services/redux/actions/user/userActions";

function ProtectedRoute({ children, ...rest }) {
  const { user } = useSelector((store) => store.user);
  const { pathname, state } = useLocation();
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem(_refreshToken);
  const { isAuthChecked, isLoading, authCheck } = useAuthCheck();

  useEffect(() => {
    if (!refreshToken) {
      dispatch({ type: SET_AUTH_CHECKED });
      return;
    }
    if (!isAuthChecked) {
      authCheck();
    }

    // eslint-disable-next-line
  }, [dispatch]);

  if (isAuthChecked && !isLoading && user) {
    return <Route {...rest}>{children}</Route>;
  }

  if (isAuthChecked && !isLoading && !user) {
    return (
      <Redirect
        to={{
          pathname: ROUTES.LOGIN,
          state: { ...state, from: pathname },
        }}
      />
    );
  }

  return <Spinner />;
}

export default ProtectedRoute;
