import ErrorMessage from "../../components/utils/error-message/error-message";
import Spinner from "../../components/utils/spinner/spinner";

export const _IDLE = "IDLE";
export const _LOADING = "LOADING";
export const _ERROR = "ERROR";

export const setContent = (componentStatus, View) => {
  switch (componentStatus) {
    case _LOADING: {
      return <Spinner />;
    }
    case _ERROR: {
      return <ErrorMessage />;
    }
    case _IDLE: {
      return <View />;
    }
    default: {
      throw new Error("Wrong type of component status");
    }
  }
};
