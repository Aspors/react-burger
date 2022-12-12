import { useSelector } from "react-redux";
import { getUser } from "../services/redux/actions/user/userActions";
import { useAppDispatch } from "./useAppDispatch";

const useAuthCheck = () => {
  const { isAuthChecked } = useSelector<
    any,
    { isAuthChecked: boolean; isLoading: boolean }
  >((store) => store.user);
  const dispatch = useAppDispatch();

  const authCheck = () => {
    dispatch(getUser());
  };

  return { isAuthChecked, authCheck };
};

export default useAuthCheck;
