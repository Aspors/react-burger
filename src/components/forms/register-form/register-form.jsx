import styles from "./register-form.module.css";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className={styles["register-form"]}>
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <Input
        type={"text"}
        placeholder={"Имя"}
        isIcon={false}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["register-form__input"]}
      />
      <EmailInput
        name={"email"}
        isIcon={false}
        extraClass={styles["register-form__input"]}
      />
      <Input
        type={"password"}
        placeholder={"Пароль"}
        icon={"ShowIcon"}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["register-form__input"]}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass={styles["register-form__button"]}
      >
        Зарегистрироваться
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Уже зарегистрированы? <Link to="/login">Войти</Link>
      </span>
    </form>
  );
};

export default RegisterForm;
