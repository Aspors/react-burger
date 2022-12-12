export type TPasswordInput = {
  onChange: () => void;
  onBlur: () => void;
  value: string;
  error?: string | object;
  errorText?: string;
  placeholder: string;
  styles?: string;
};
