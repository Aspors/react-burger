import styles from "./register-form.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { validationConfig } from "../../../utils/configs/validation.config";
import * as yup from "yup";
import {
  email,
  userName,
  password,
} from "../../../utils/consts/form-consts/yup-consts";
import PasswordInput from "../../utils/password-input/password-input";
import { useSelector } from "react-redux";
import { userRegister } from "../../../services/redux/actions/user/userActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  THistory,
  TSubmitData,
} from "../../../utils/types/component-types/form.types";

import * as H from "history";

const RegisterForm = () => {
  const schema = yup.object().shape({
    email: email,
    password: password,
    name: userName,
  });

  const history = useHistory<H.History & THistory>();

  const dispatch = useAppDispatch();
  const isLoading = useSelector<any, boolean>((store) => store.user.isLoading);
  const { control, handleSubmit, setError } = useForm(
    validationConfig({ email: "", password: "", name: "" }, schema)
  );
  const from = history.location.state?.from;
  const onSubmit = (data: TSubmitData) => {
    dispatch(userRegister(data, setError, history, from));
  };
  console.log(from);

  return (
    <form className={styles["register-form"]} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text text_type_main-medium">Регистрация</h1>
      <Controller
        control={control}
        name="name"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={"text"}
            placeholder={"Имя"}
            error={!!error}
            errorText={error?.message}
            size={"default"}
            extraClass={styles["register-form__input"]}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            type={"email"}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={!!error}
            errorText={error?.message}
            extraClass={styles["register-form__input"]}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <PasswordInput
            placeholder={"Пароль"}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error?.message}
            errorText={error?.message}
            styles={styles["register-form__input"]}
          />
        )}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={isLoading}
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
