import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { TPasswordInput } from "./password-input.type";

const PasswordInput: React.FC<TPasswordInput> = ({
  onChange,
  onBlur,
  value,
  error,
  errorText,
  placeholder,
  styles,
}) => {
  const [type, setType] = useState("password");

  const handleIconClick = () => {
    setType((type) => (type === "password" ? "text" : "password"));
  };

  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={!!error}
      errorText={errorText}
      // @ts-ignore
      type={type}
      onIconClick={handleIconClick}
      placeholder={placeholder}
      icon={"ShowIcon"}
      size={"default"}
      extraClass={styles}
    />
  );
};

export default PasswordInput;
