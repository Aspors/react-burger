import styles from "./reset-password.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPasswordForm = () => {
  return (
    <form className={styles["reset-password-form"]}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <Input
        onChange={() => {}}
        type={"password"}
        placeholder={"Введите новый пароль"}
        icon={"ShowIcon"}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["reset-password-form__input"]}
      />
      <Input
        onChange={() => {}}
        type={"text"}
        placeholder={"Введите код из письма"}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["reset-password-form__input"]}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass={styles["reset-password-form__button"]}
      >
        Восстановить
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вспомнили пароль? <a href="#">Войти</a>
      </span>
    </form>
  );
};

export default ResetPasswordForm;
