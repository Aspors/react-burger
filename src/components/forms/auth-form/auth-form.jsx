import styles from "./auth-form.module.css";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const authForm = () => {
  return (
    <form className={styles["auth-form"]}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <EmailInput
        name={"email"}
        onChange={() => {}}
        isIcon={false}
        extraClass={styles["auth-form__input"]}
      />
      <Input
        type={"password"}
        onChange={() => {}}
        placeholder={"Пароль"}
        icon={"ShowIcon"}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={styles["auth-form__input"]}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="small"
        extraClass={styles["auth-form__button"]}
      >
        Войти
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вы — новый пользователь? <Link to="/register">Зарегистрироваться</Link>
      </span>
      <span className={"text text_type_main-default text_color_inactive"}>
        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
      </span>
    </form>
  );
};

export default authForm;
