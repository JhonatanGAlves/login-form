import { FormRowContainer } from "./styles";

interface FormRowProps {
  htmlFor: string;
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
}

export const FormRow = ({
  htmlFor,
  label,
  id,
  type,
  autoComplete,
}: FormRowProps) => {
  return (
    <FormRowContainer>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={id} type={type} autoComplete={autoComplete} />
    </FormRowContainer>
  );
};
