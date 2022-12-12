import { Resolver, ValidationMode } from "react-hook-form";

import { AnyObjectSchema } from "yup";

export type TDefaultValues = {
  [key: string]: string;
};

export type TSchema = AnyObjectSchema;

export type Mode = {
  onBlur: "onBlur";
  onChange: "onChange";
  onSubmit: "onSubmit";
};

type TValidationObj = {
  defaultValues: TDefaultValues;
  mode: keyof ValidationMode;
  shouldFocusError: boolean;
  resolver: Resolver;
  reValidateMode: keyof Mode | undefined;
};

export type TValidation = (
  defaultValues: TDefaultValues,
  schema: TSchema
) => TValidationObj;
