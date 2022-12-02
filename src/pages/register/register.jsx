import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import RegisterForm from "../../components/forms/register-form/register-form";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../services/utils/cookie-managment/cookie-manage";

const Register = () => {
  const isAuth = getCookie("token");
  const history = useHistory();
  if (isAuth) {
    const from = (history.state && history.state.from) || "/";
    history.replace(from);
  }
  return (
    <FormWrapper>
      <RegisterForm />
    </FormWrapper>
  );
};

export default Register;
