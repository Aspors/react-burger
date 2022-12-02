import { useState } from "react";
import api from "../http";
import { ROUTES } from "../utils/consts/sevice-consts/routes.consts";

const useSumitForm = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (endpoint, data, history, to, from = null) => {
    setDisabled(true);
    try {
      api
        .post(endpoint, data)
        .then((res) => {
          alert(res?.message);
          !!from &&
            (() => {
              history.state = { from: ROUTES.FORGOT_PASSWORD };
            })();
          history.replace(to);
        })
        .catch((res) => {
          setErrorMessage(res?.message);
        })
        .finally(() => setDisabled(false));
    } catch (e) {
      setDisabled(false);
      setErrorMessage(e.message);
      throw e;
    }
  };

  return { isDisabled, submitForm, errorMessage };
};

export default useSumitForm;
