import styles from "./profile-tabs.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../services/redux/actions/user/userActions";

import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";

const ProfileTabs = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(userLogOut());
  };
  const isProfile = pathname === ROUTES.PROFILE;
  const isHistory = pathname === "profile/history";
  return (
    <div className={`${styles["tab__list"]}`}>
      <ol className={`text text_type_main-medium`}>
        <li
          className={`text text_type_main-medium ${
            !isProfile && "text_color_inactive"
          }`}
        >
          Профиль
        </li>
        <li
          className={`text text_type_main-medium ${
            !isHistory && "text_color_inactive"
          }`}
        >
          История заказов
        </li>
        <li
          className={`text text_type_main-medium text_color_inactive`}
          onClick={handleLogout}
        >
          Выход
        </li>
      </ol>
      <p className="text text_type_main-default text_color_inactive">{`В этом разделе вы можете
        изменить свои персональные данные`}</p>
    </div>
  );
};

export default ProfileTabs;
