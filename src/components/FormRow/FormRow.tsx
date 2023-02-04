import { useState } from "react";
import { FormRowContainer } from "./styles";

interface FormRowProps {
  label: string;
  type: string;
  autoComplete?: string;
  setValueOnChange: (value: string) => void;
}

export const FormRow = ({
  label,
  type,
  autoComplete,
  setValueOnChange,
}: FormRowProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <FormRowContainer>
      <label htmlFor={type}>{label}</label>
      <input
        id={type}
        type={type}
        autoComplete={autoComplete}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setValueOnChange(e.target.value);
        }}
      />
    </FormRowContainer>
  );
};
