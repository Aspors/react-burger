import { Resolver, ValidationMode } from "react-hook-form";

import { AnyObjectSchema } from "yup";

export type TDefaultValues =
  | {
      [key: string]: string;
    }
  | { [key: string]: undefined };

export type TSchema = AnyObjectSchema;

export type Mode = {
  onBlur: "onBlur";
  onChange: "onChange";
  onSubmit: "onSubmit";
};

type TValidationObj = {
  defaultValues: TDefaultValues | undefined;
  mode: keyof ValidationMode;
  shouldFocusError: boolean;
  resolver: Resolver;
  reValidateMode: keyof Mode | undefined;
};

export type TValidation = (
  defaultValues: TDefaultValues | undefined,
  schema: TSchema
) => TValidationObj;
