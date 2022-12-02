import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import ResetPasswordForm from "../../components/forms/reset-password/reset-password";
import { Redirect, useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";

const ResetPassword = () => {
  const history = useHistory();
  const from = history.state && history.state.from === ROUTES.FORGOT_PASSWORD;
  return from ? (
    <FormWrapper>
      <ResetPasswordForm />
    </FormWrapper>
  ) : (
    <Redirect to={"/"} />
  );
};

export default ResetPassword;
