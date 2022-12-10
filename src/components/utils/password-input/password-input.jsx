import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

const PasswordInput = ({
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
      error={error}
      errorText={errorText}
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
