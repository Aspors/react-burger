import {
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../forms/auth-form/auth-form.module.css";

const profileForm = () => {
  return (
    <ul>
      <EmailInput
        name={"name"}
        onChange={() => {}}
        placeholder="Имя"
        value={"mark"}
        isIcon={true}
        extraClass="mb-2"
      />
      <EmailInput
        onChange={() => {}}
        name={"email"}
        value={"random@mail.com"}
        placeholder="Логин"
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

export default profileForm;
