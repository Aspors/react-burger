import styles from "./forgot-password-form.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <form className={styles["forgot-password-form"]}>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <EmailInput
        name={"email"}
        value={"ssss@gmail.com"}
        placeholder={"Укажите e-mail"}
        isIcon={false}
        extraClass={styles["forgot-password-form__input"]}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass={styles["forgot-password-form__button"]}
      >
        Восстановить
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </span>
    </form>
  );
};

export default ForgotPasswordForm;
