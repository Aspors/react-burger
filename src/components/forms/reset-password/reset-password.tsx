import styles from "./reset-password.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { validationConfig } from "../../../utils/configs/validation.config";
import * as yup from "yup";
import { token, password } from "../../../utils/consts/form-consts/yup-consts";
import PasswordInput from "../../utils/password-input/password-input";
import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";
import { _PASSWORD_RESET } from "../../../utils/consts/sevice-consts/Api-consts";
import useSubmitForm from "../../../hooks/useSubmitForm";
import { FIELD_NAME } from "../../../utils/consts/form-consts/field-names.consts";
import {
  THistory,
  TSubmitData,
} from "../../../utils/types/component-types/form.types";

const ResetPasswordForm = () => {
  const schema = yup.object().shape({
    password: password,
    token: token,
  });
  const { isDisabled, submitForm } = useSubmitForm();
  const history = useHistory<THistory>();
  const { control, handleSubmit, setError } = useForm(
    validationConfig({ password: "", token: "" }, schema)
  );

  const onError = (message: string) => {
    message.includes("password") &&
      setError(
        FIELD_NAME.PASSWORD,
        { message: message },
        { shouldFocus: true }
      );

    message.includes("token") &&
      setError(FIELD_NAME.TOKEN, { message: message }, { shouldFocus: true });
  };

  const from = history.location.state?.from;

  const onSubmit = (data: TSubmitData) => {
    submitForm(
      _PASSWORD_RESET,
      data,
      history,
      ROUTES.LOGIN,
      false,
      from,
      onError
    );
  };

  return (
    <form
      className={styles["reset-password-form"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <PasswordInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error?.message}
            errorText={error?.message}
            placeholder={"Введите новый пароль"}
            styles={styles["reset-password-form__input"]}
          />
        )}
      />

      <Controller
        control={control}
        name="token"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            type={"text"}
            placeholder={"Введите код из письма"}
            name={"password"}
            error={!!error?.message}
            errorText={error?.message}
            size={"default"}
            extraClass={styles["reset-password-form__input"]}
          />
        )}
      />

      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={isDisabled}
        extraClass={styles["reset-password-form__button"]}
      >
        Восстановить
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вспомнили пароль?{" "}
        <Link
          to={{ pathname: ROUTES.LOGIN, state: { from: !!from && from } }}
          replace
        >
          Войти
        </Link>
      </span>
    </form>
  );
};

export default ResetPasswordForm;
