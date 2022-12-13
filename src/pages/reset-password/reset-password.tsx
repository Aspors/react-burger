import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import ResetPasswordForm from "../../components/forms/reset-password/reset-password";
import { Redirect, useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";
import { useEffect } from "react";
import { THistory } from "../../utils/types/component-types/form.types";

const ResetPassword = () => {
  const history = useHistory<THistory & { pass?: boolean }>();
  const pass = history.location.state?.pass;
  useEffect(() => {
    return () => {
      typeof history.location.state?.pass === "boolean" &&
        delete history.location.state.pass;
    };
  });
  return pass ? (
    <FormWrapper>
      <ResetPasswordForm />
    </FormWrapper>
  ) : (
    <Redirect to={ROUTES.HOME} />
  );
};

export default ResetPassword;
