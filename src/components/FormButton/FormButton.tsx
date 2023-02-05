import { useState } from "react";
import { FormButtonContainer } from "./styles";
import { login } from "../../utils/utils";
import { Loading } from "../Loading/Loading";

interface FormButtonProps {
  textButton: string;
  email: string;
  password: string;
  disabled: boolean;
  setShowErrorMessage: (error: boolean) => void;
  setShowSuccessMessage: (success: boolean) => void;
}

export const FormButton = ({
  textButton,
  email,
  password,
  disabled,
  setShowErrorMessage,
  setShowSuccessMessage,
}: FormButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <FormButtonContainer>
      <button
        onClick={() => {
          login(
            email,
            password,
            setLoading,
            setShowErrorMessage,
            setShowSuccessMessage
          );
          setShowErrorMessage(false);
        }}
        disabled={disabled || loading}
      >
        {loading && <Loading />}
        {textButton}
      </button>
    </FormButtonContainer>
  );
};
