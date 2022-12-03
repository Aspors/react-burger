import { useState } from "react";
import api from "../http";

const useSumitForm = () => {
  const [isDisabled, setDisabled] = useState(false);

  const submitForm = (
    endpoint,
    data,
    history,
    to,
    pass = false,
    from = null,
    onError
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
          onError(error.response?.data?.message);
        })
        .finally(() => setDisabled(false));
    } catch (e) {
      setDisabled(false);
      onError(e);
      throw e;
    }
  };

  return { isDisabled, submitForm };
};

export default useSumitForm;
