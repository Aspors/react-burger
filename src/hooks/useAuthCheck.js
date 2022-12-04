import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/redux/actions/user/userActions";

const useAuthCheck = () => {
  const { isAuthChecked, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const authCheck = async () => {
    dispatch(getUser());
  };

  return { isAuthChecked, authCheck, isLoading };
};

export default useAuthCheck;
