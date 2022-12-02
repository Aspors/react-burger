import React from "react";
import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import AuthForm from "../../components/forms/auth-form/auth-form";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../services/utils/cookie-managment/cookie-manage";

const Auth = () => {
  const isAuth = getCookie("token");
  const history = useHistory();
  if (isAuth) {
    const from = (history?.state && history.state.from) || "/";
    history.replace(from);
  }
  return (
    <div className="container">
      <FormWrapper>
        <AuthForm />
      </FormWrapper>
    </div>
  );
};

export default Auth;
