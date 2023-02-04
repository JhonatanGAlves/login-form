import { FormButtonContainer } from "./styles";
import { login } from "../../utils/utils";

interface FormButtonProps {
  textButton: string;
  email: string;
  password: string;
}

export const FormButton = ({
  textButton,
  email,
  password,
}: FormButtonProps) => {
  return (
    <FormButtonContainer>
      <button onClick={() => login(email, password)}>{textButton}</button>
    </FormButtonContainer>
  );
};
