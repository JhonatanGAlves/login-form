import { useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <FormButtonContainer>
      <button
        onClick={() => login(email, password, setLoading)}
        disabled={disabled || loading}
      >
        {textButton}
      </button>
    </FormButtonContainer>
  );
};
