import React from "react";
import FormWrapper from "../../components/forms/form-wrapper/form-wrapper";
import AuthForm from "../../components/forms/auth-form/auth-form";

const Auth = () => {
  return (
    <div className="container">
      <FormWrapper>
        <AuthForm />
      </FormWrapper>
    </div>
  );
};

export default Auth;
