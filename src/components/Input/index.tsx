import { useEffect, useRef } from "react";
import { InputStyled } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({ error, value, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  return <InputStyled ref={inputRef} error={error} {...rest} value={value} />;
};
