import styles from "./profile-tabs.module.css";

const ProfileTabs = () => {
  return (
    <div className={`${styles["tab__list"]}`}>
      <ol className={`text text_type_main-medium`}>
        <li>Профиль</li>
        <li>История заказов</li>
        <li>Выход</li>
      </ol>
      <p className="text text_type_main-default text_color_inactive">{`В этом разделе вы можете
        изменить свои персональные данные`}</p>
    </div>
  );
};

export default ProfileTabs;
