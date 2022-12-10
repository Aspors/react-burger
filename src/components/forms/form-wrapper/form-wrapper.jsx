import styles from "./form-wrapper.module.css";

const FormWrapper = ({ children }) => {
  return <div className={styles["form-wrapper"]}>{children}</div>;
};

export default FormWrapper;
