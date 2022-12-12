import { Redirect, Route, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner";
import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";
import useAuthCheck from "../../../hooks/useAuthCheck";
import React, { ReactNode } from "react";
import { TUser } from "../../../utils/types/common.types";

const CustomRoute: React.FC<{
  children?: ReactNode;
  path: string;
  isProtected?: boolean;
  exact?: boolean;
}> = ({ children, isProtected = false, ...rest }) => {
  const { user } = useSelector<any, { user: TUser }>((store) => store.user);
  const { pathname, state } = useLocation<Location>();

  const { isAuthChecked } = useAuthCheck();

  if (!isProtected && isAuthChecked && user) {
    return <Redirect to={{ pathname: ROUTES.HOME }} />;
  }

  if (isAuthChecked && user && isProtected) {
    return <Route {...rest}>{children}</Route>;
  }

  if (isProtected && isAuthChecked && !user) {
    return (
      <Redirect
        to={{
          pathname: ROUTES.LOGIN,
          state: { ...state, from: pathname },
        }}
      />
    );
  }

  if (isAuthChecked) {
    return <Route {...rest}>{children}</Route>;
  }

  return <Spinner />;
};

export default CustomRoute;
