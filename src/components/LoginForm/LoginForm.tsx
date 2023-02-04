import { FormButton } from "../FormButton/FormButton";
import { FormRow } from "../FormRow/FormRow";
import { ErrorMessage, LoginFormContainer, LoginFormContent } from "./styles";

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginFormContent>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <ErrorMessage />
        <FormRow
          htmlFor="email"
          label="Email"
          id="email"
          type="email"
          autoComplete="off"
        />
        <FormRow
          htmlFor="password"
          label="Password"
          id="password"
          type="password"
          autoComplete="on"
        />
        <FormButton textButton="Login" />
      </LoginFormContent>
    </LoginFormContainer>
  );
};
