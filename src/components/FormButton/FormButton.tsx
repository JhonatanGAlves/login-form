import { FormButtonContainer } from "./styles";
import { login } from "../../utils/utils";

interface FormButtonProps {
  textButton: string;
  email: string;
  password: string;
  disabled: boolean;
}

export const FormButton = ({
  textButton,
  email,
  password,
  disabled,
}: FormButtonProps) => {
  return (
    <FormButtonContainer>
      <button onClick={() => login(email, password)} disabled={disabled}>
        {textButton}
      </button>
    </FormButtonContainer>
  );
};
