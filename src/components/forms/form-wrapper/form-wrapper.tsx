import styles from "./form-wrapper.module.css";
import { FC, ReactNode } from "react";

const FormWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className={styles["form-wrapper"]}>{children}</div>;
};

export default FormWrapper;
