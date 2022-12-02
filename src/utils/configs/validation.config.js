import { yupResolver } from "@hookform/resolvers/yup";

export const validationConfig = (defaultValues, schema) => ({
  defaultValues,
  mode: "onBlur",
  shouldFocusError: true,
  resolver: yupResolver(schema),
  reValidateMode: "onChange",
});
