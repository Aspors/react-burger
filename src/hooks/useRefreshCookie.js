import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  RESET_LOADING,
} from "../services/redux/actions/user/userActions";

const useAuthCheck = () => {
  const { isAuthChecked, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const authCheck = async () => {
    dispatch(getUser());
  };

  const resetLoading = () => {
    dispatch({ type: RESET_LOADING });
  };

  return { isAuthChecked, authCheck, isLoading, resetLoading };
};

export default useAuthCheck;
