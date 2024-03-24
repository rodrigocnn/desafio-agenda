import styled from "styled-components";

interface InputProps {
  error?: boolean;
  ref: React.RefObject<HTMLInputElement>;
}

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  padding: 0 1.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
  color: var(--text-body);
  &::placeholder {
    color: var(--text-body);
  }

  &:focus {
    border: 1px solid ${(props) => (props.error ? "red !important" : "blue")};
    outline: none;
  }
`;
