import styles from "./auth-form.module.css";
import {
  Button,
  Input,
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
import { useSelector } from "react-redux";
import { userLogin } from "../../../services/redux/actions/user/userActions";
import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { TSubmitData } from "../../../utils/types/component-types/form.types";

const AuthForm = () => {
  const schema = yup.object().shape({
    email: email,
    password: authPassword,
  });
  const isLoading = useSelector<any, boolean>((store) => store.user.isLoading);
  const history = useHistory<History & { from?: string }>();
  const from = history.location.state?.from;
  const dispatch = useAppDispatch();
  const onSubmit = (data: TSubmitData) => {
    dispatch(userLogin(data, setError, history, from));
  };
  const { control, handleSubmit, setError } = useForm(
    validationConfig({ email: "", password: "" }, schema)
  );

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
          <Input
            type="email"
            placeholder={"Введите e-mail"}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error?.message}
            errorText={error?.message}
            value={value}
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
            error={error?.message}
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
        disabled={isLoading}
        extraClass={styles["auth-form__button"]}
      >
        Войти
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вы — новый пользователь?{" "}
        <Link to={{ pathname: ROUTES.REGISTER, state: { from: from } }}>
          Зарегистрироваться
        </Link>
      </span>
      <span className={"text text_type_main-default text_color_inactive"}>
        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
      </span>
    </form>
  );
};

export default AuthForm;
