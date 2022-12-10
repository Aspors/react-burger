import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "../../utils/password-input/password-input";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  email,
  profilePassword,
  userName,
} from "../../../utils/consts/form-consts/yup-consts";
import { validationConfig } from "../../../utils/configs/validation.config";
import { patchUser } from "../../../services/redux/actions/user/userActions";

const ProfileForm = () => {
  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: userName,
    email: email,
    password: profilePassword,
  });

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isDirty },
  } = useForm(
    validationConfig(
      {
        name: user.name,
        email: user.email,
        password: "",
      },
      schema
    )
  );

  const onError = (res) => {
    res.data?.message.includes("email") &&
      setError("email", { message: res.data.message });
    res.data?.message.includes("name") &&
      setError("name", { message: res.data.message });
    res.data?.message.includes("password") &&
      setError("password", { message: res.data.message });
  };

  const onSubmit = (data) => {
    dispatch(patchUser(data, onError));
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <EmailInput
            onChange={onChange}
            type={"text"}
            onBlur={onBlur}
            value={value}
            error={!!error?.message}
            errorText={error?.message}
            placeholder="Имя"
            isIcon={true}
            extraClass="mb-2"
          />
        )}
      />

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
            value={value}
            error={!!error?.message}
            errorText={error?.message}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-2"
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
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={"password"}
            placeholder={"Пароль"}
            icon={"ShowIcon"}
            error={!!error?.message}
            errorText={error?.message}
            size={"default"}
          />
        )}
      />

      {isDirty && (
        <div className={styles["button-wrapper"]}>
          <Button
            onClick={handleCancel}
            htmlType={"button"}
            type="secondary"
            size="small"
          >
            Отмена
          </Button>
          <Button htmlType={"submit"} type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
