import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
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
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { TSubmitData } from "../../../utils/types/component-types/form.types";
import { AxiosResponse } from "axios";
import { useAppSelector } from "../../../hooks/useAppSelector";

const ProfileForm = () => {
  const user = useAppSelector((store) => store.user.user);

  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    name: userName,
    email: email,
    password: profilePassword,
  });

  const defaultValues = user
    ? {
        name: user?.name,
        email: user?.email,
        password: "",
      }
    : undefined;

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isDirty },
  } = useForm(validationConfig(defaultValues, schema));

  const onError = (res: AxiosResponse) => {
    res.data?.message.includes("email") &&
      setError("email", { message: res.data.message });
    res.data?.message.includes("name") &&
      setError("name", { message: res.data.message });
    res.data?.message.includes("password") &&
      setError("password", { message: res.data.message });
  };

  const onSubmit = (data: TSubmitData) => {
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
        render={({ field: { onChange, onBlur, value } }) => (
          <EmailInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Имя"
            isIcon={true}
            extraClass="mb-2"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <EmailInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
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
            placeholder={"Пароль"}
            error={error?.message}
            errorText={error?.message}
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
