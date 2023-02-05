import { useEffect, useState } from "react";
import { ErrorMessageTypes } from "../../types/types";
import { FormButton } from "./FormButton/FormButton";
import { FormRow } from "./FormRow/FormRow";
import { GlobalNotification } from "../GlobalNotification/GlobalNotification";
import { ErrorMessage, LoginFormContainer, LoginFormContent } from "./styles";

export const LoginForm = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] =
    useState<ErrorMessageTypes>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const loginButtonDisabled = !emailValue || passwordValue.length < 6;

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(function () {
        setShowSuccessMessage(false);
      }, 7000);
    }
  }, [showSuccessMessage]);

  return (
    <>
      {showSuccessMessage && (
        <GlobalNotification
          message="Login successful."
          onClick={() => setShowSuccessMessage(false)}
        />
      )}
      <LoginFormContainer>
        <LoginFormContent>
          <h1>Login Form 🐞</h1>
          {showErrorMessage && (
            <ErrorMessage>{showErrorMessage.message}</ErrorMessage>
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
            loginValues={{ email: emailValue, password: passwordValue }}
            disabled={loginButtonDisabled}
            setShowErrorMessage={setShowErrorMessage}
            setShowSuccessMessage={setShowSuccessMessage}
          />
        </LoginFormContent>
      </LoginFormContainer>
    </>
  );
};
