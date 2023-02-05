import { useState } from "react";
import { FormButtonContainer } from "./styles";
import { login } from "../../../utils/utils";
import { Loading } from "../../Loading/Loading";
import { ErrorMessageTypes, FormButtonProps } from "../../../types/types";

export const FormButton = ({
  textButton,
  loginValues,
  disabled,
  setShowErrorMessage,
  setShowSuccessMessage,
}: FormButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <FormButtonContainer>
      <button
        onClick={() => {
          setLoading(true);
          setShowErrorMessage(null);

          login(loginValues)
            .then(() => setShowSuccessMessage(true))
            .catch((error: ErrorMessageTypes) => setShowErrorMessage(error))
            .finally(() => setLoading(false));
        }}
        disabled={disabled || loading}
      >
        {loading && <Loading />}
        {textButton}
      </button>
    </FormButtonContainer>
  );
};
