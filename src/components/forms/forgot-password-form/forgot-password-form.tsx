import styles from "./forgot-password-form.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { validationConfig } from "../../../utils/configs/validation.config";
import * as yup from "yup";
import { email } from "../../../utils/consts/form-consts/yup-consts";

import { ROUTES } from "../../../utils/consts/sevice-consts/routes.consts";

import useSubmitForm from "../../../hooks/useSubmitForm";
import { _FORGOT_PASSWORD } from "../../../utils/consts/sevice-consts/Api-consts";
import { FIELD_NAME } from "../../../utils/consts/form-consts/field-names.consts";
import {
  THistory,
  TSubmitData,
} from "../../../utils/types/component-types/form.types";

const ForgotPasswordForm = () => {
  const schema = yup.object().shape({
    email: email,
  });
  const history = useHistory<THistory>();
  const { isDisabled, errorMessage, submitForm } = useSubmitForm();
  const { control, handleSubmit, setError } = useForm(
    validationConfig({ email: "" }, schema)
  );

  const onError = () => {
    errorMessage.includes("token") &&
      setError(
        FIELD_NAME.TOKEN,
        { message: errorMessage },
        { shouldFocus: true }
      );
  };

  const from = history.location.state?.from;

  const onSubmit = (body: TSubmitData) => {
    submitForm(
      _FORGOT_PASSWORD,
      body,
      history,
      ROUTES.RESET_PASSWORD,
      true,
      from
    );
    !!errorMessage && onError();
  };

  return (
    <form
      className={styles["forgot-password-form"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Input
            type={"email"}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error?.message}
            errorText={error?.message}
            placeholder={"Укажите e-mail"}
            extraClass={styles["forgot-password-form__input"]}
          />
        )}
      />

      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={isDisabled}
        extraClass={styles["forgot-password-form__button"]}
      >
        Восстановить
      </Button>
      <span className={"text text_type_main-default text_color_inactive"}>
        Вспомнили пароль?{" "}
        <Link
          to={{
            pathname: ROUTES.LOGIN,
            state: { from: history.location.state?.from },
          }}
        >
          Войти
        </Link>
      </span>
    </form>
  );
};

export default ForgotPasswordForm;
