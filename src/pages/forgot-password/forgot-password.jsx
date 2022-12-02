import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import ForgotPasswordForm from "../../components/forms/forgot-password-form/forgot-password-form";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../services/utils/cookie-managment/cookie-manage";

const ForgotPassword = () => {
  const isAuth = getCookie("token");
  const history = useHistory();
  if (isAuth) {
    const from = (history.state && history.state.from) || "/";
    history.replace(from);
  }
  return (
    <FormWrapper>
      <ForgotPasswordForm />
    </FormWrapper>
  );
};

export default ForgotPassword;
