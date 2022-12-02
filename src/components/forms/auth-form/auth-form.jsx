import styles from "./auth-form.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { validationConfig } from "../../../utils/configs/validation.config";
import {
  email,
  authPassword,
} from "../../../utils/consts/form-consts/yup-consts";
import PasswordInput from "../../utils/password-input/password-input";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../services/redux/actions/user/userActions";
import { _LOADING } from "../../../services/utils/machine/machine";

const AuthForm = () => {
  const schema = yup.object().shape({
    email: email,
    password: authPassword,
  });
  const status = useSelector((store) => store.user.status);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(userLogin(data, setError, history));
  };
  const { control, handleSubmit, setError } = useForm(
    validationConfig({ email: "", password: "" }, schema)
  );

  const isDisabled = status === _LOADING;
  return (
    <form className={styles["auth-form"]} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <Controller
        name="email"
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <EmailInput
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            errorText={error?.message}
            value={value}
            isIcon={false}
            extraClass={styles["auth-form__input"]}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <PasswordInput
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error}
            errorText={error?.message}
            placeholder={"Пароль"}
            styles={styles["auth-form__input"]}
          />
        )}
      />

      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={isDisabled}
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

export default AuthForm;
