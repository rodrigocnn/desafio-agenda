import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

export const ButtonAction = styled.button`
  background: transparent;
  border: none;

  svg {
    font-size: 1.5rem;
    color: var(--text-body);
  }
`;
