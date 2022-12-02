import { useState } from "react";
import AuthService from "../services/auth-service/auth-service";
import { setCookie } from "../services/utils/cookie-managment/cookie-manage";
import { _accessToken } from "../utils/consts/sevice-consts/token-names";
import { useDispatch } from "react-redux";

const useRefreshCookie = () => {
  const [loading, setLoading] = useState(false);

  const refreshCookie = async (refreshToken) => {
    try {
      setLoading(true);
      const res = await AuthService.getCookie(refreshToken);
      console.log(res);
      setCookie(_accessToken, res.data.accessToken);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  return { loading, refreshCookie };
};

export default useRefreshCookie;
