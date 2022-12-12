import ErrorMessage from "../../components/utils/error-message/error-message";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";
import styles from "./page404.module.css";
import { THistory } from "../../utils/types/component-types/form.types";

const Page404 = () => {
  const { state } = useLocation<Location & THistory>();
  return (
    <div className={styles.container}>
      <h1 className={"text text_type_main-large"}>404 не найдено</h1>
      <ErrorMessage maxHeight={200} maxWidth={200} />
      <p className="text text_type_main-medium">
        Этой страницы не существует{" "}
        <Link to={state?.from ? state.from : ROUTES.HOME} replace>
          нажимите, чтобы вернуться назад
        </Link>
      </p>
    </div>
  );
};

export default Page404;
