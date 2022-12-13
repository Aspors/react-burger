import { yupResolver } from "@hookform/resolvers/yup";
import { TValidation } from "./validation.type";

export const validationConfig: TValidation = (defaultValues, schema) => ({
  defaultValues,
  mode: "onBlur",
  shouldFocusError: true,
  resolver: yupResolver(schema),
  reValidateMode: "onChange",
});
