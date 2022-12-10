import * as yup from "yup";

export const email = yup
  .string()
  .email("Введите корректный e-mail")
  .required("Введите e-mail");

export const userName = yup
  .string()
  .min(2, "Минимум 2 символа")
  .max(12, "Максимум 12 символов")
  .required("Введите имя");

export const password = yup
  .string()
  .min(8, "Минимум 8 символов")
  .max(32, "Максимум 32 символа")
  .required("Введите пароль");

export const token = yup.string().required("Обязательное поле");

export const authPassword = yup.string().required("Введите пароль");

export const profilePassword = yup.lazy((value) => {
  return value === ""
    ? yup.string()
    : yup.string().min(8, "Минимум 8 символов").max(32, "Максимум 32 символа");
});
