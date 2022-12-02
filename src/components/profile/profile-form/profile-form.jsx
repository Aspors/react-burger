import {
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../forms/auth-form/auth-form.module.css";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const { name, email } = useSelector((store) => store.user.user);
  return (
    <ul>
      <EmailInput
        name={"name"}
        onChange={() => {}}
        placeholder="Имя"
        value={name}
        isIcon={true}
        extraClass="mb-2"
      />
      <EmailInput
        onChange={() => {}}
        name={"email"}
        placeholder="Логин"
        value={email}
        isIcon={true}
        extraClass="mb-2"
      />
      <Input
        onChange={() => {}}
        type={"password"}
        placeholder={"Пароль"}
        icon={"ShowIcon"}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["auth-form__input"]}
      />
    </ul>
  );
};

export default ProfileForm;
