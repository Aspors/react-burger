import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useRefreshCookie from "../../../hooks/useRefreshCookie";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../../services/redux/actions/user/userActions";
import {
  getCookie,
  setCookie,
} from "../../../services/utils/cookie-managment/cookie-manage";
import { _accessToken } from "../../../utils/consts/sevice-consts/token-names";
// import Spinner from "../spinner/spinner";
// import { _LOADING } from "../../../services/utils/machine/machine";
// import AuthService from "../../../services/auth-service/auth-service";

function ProtectedRoute({ children, ...rest }) {
  const isAuth = getCookie(_accessToken);
  // console.log(isAuth);
  // const refreshToken = localStorage.getItem("refreshToken");
  const { pathname } = useLocation();
  // useEffect(() => {
  //   if (!isAuth && !!refreshToken) {
  //     AuthService.getCookie(refreshToken).then((res) => {
  //       setCookie(_accessToken, res?.data.accessToken);
  //     });
  //   }
  // }, []);
  return (
    <Route {...rest}>
      {isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: pathname },
          }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
