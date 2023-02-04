import { FormButtonContainer } from "./styles";

interface FormButtonProps {
  textButton: string;
}

export const FormButton = ({ textButton }: FormButtonProps) => {
  return (
    <FormButtonContainer>
      <button>{textButton}</button>
    </FormButtonContainer>
  );
};
