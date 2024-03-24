import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const Form = styled.form`
  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    background: var(--shape);
    color: var(--blue-light);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;

    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  button[type="button"] {
    background: #361b1b;
    color: #fff;
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 250px;
  background: var(--blue);
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.24rem;
  z-index: 999; /* Definindo um índice z alto para que o modal fique acima de outros elementos */
  margin-left: 0rem;
  border: 1px solid #999;
  transition: opacity 1s ease;

  button {
    svg {
      position: relative;
      top: -1rem;
      left: 1rem;
    }
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2rem;
  padding: 0 1.5rem;

  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #fff;
  font-weight: 400;
  font-size: 1rem;
  &::placeholder {
    color: var(--text-body);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
`;
