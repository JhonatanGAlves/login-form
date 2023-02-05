import { useState } from "react";
import { FormButton } from "../FormButton/FormButton";
import { FormRow } from "../FormRow/FormRow";
import { ErrorMessage, LoginFormContainer, LoginFormContent } from "./styles";

export const LoginForm = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const loginButtonDisabled = !emailValue || passwordValue.length < 6;

  return (
    <LoginFormContainer>
      <LoginFormContent>
        <h1>Login Form 🐞</h1>
        {showErrorMessage && (
          <ErrorMessage>E-mail or password wrong.</ErrorMessage>
        )}
        <FormRow
          label="Email"
          type="email"
          autoComplete="on"
          setValueOnChange={(email: string) => setEmailValue(email)}
        />
        <FormRow
          label="Password"
          type="password"
          autoComplete="off"
          setValueOnChange={(password: string) => setPasswordValue(password)}
        />
        <FormButton
          textButton="Login"
          email={emailValue}
          password={passwordValue}
          disabled={loginButtonDisabled}
          setShowErrorMessage={setShowErrorMessage}
        />
      </LoginFormContent>
    </LoginFormContainer>
  );
};
