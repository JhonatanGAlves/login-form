export type Login = {
  email: string;
  password: string;
};

export type ErrorMessageTypes = {
  message: string;
} | null;

export interface FormRowProps {
  label: string;
  type: string;
  autoComplete?: string;
  setValueOnChange: (value: string) => void;
}

export interface FormButtonProps {
  textButton: string;
  loginValues: Login;
  disabled: boolean;
  setShowErrorMessage: (error: { message: string } | null) => void;
  setShowSuccessMessage: (success: boolean) => void;
}

export interface GlobalNotificationProps {
  onClick: () => void;
}
