import { useState } from "react";
import api from "../http";
import { TFrom, TSubmitData } from "../utils/types/component-types/form.types";

const useSubmitForm = () => {
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const submitForm = (
    endpoint: string,
    data: TSubmitData,
    history: any,
    to: string,
    pass = false,
    from: TFrom = null,
    onError?: (message: string) => void
  ) => {
    setDisabled(true);
    try {
      api
        .post(endpoint, data)
        .then(() => {
          history.replace(to, { pass, from });
        })
        .catch((error) => {
          console.log(error);
          onError && onError(error.response.data?.message);
          setErrorMessage(error);
          console.log(error);
        })
        .finally(() => setDisabled(false));
    } catch (e: any) {
      setDisabled(false);
      onError && onError(e.response.data?.message);
      setErrorMessage(e);
      throw e;
    }
  };

  return { isDisabled, submitForm, errorMessage };
};

export default useSubmitForm;
