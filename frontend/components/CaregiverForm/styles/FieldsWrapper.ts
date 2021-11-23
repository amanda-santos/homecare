import styled from "styled-components";

export const FieldsWrapper = styled.div<{ $columns: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns === 1 ? "1fr" : "1fr  1fr"};
  gap: 1.6rem;
  margin-top: 1.6rem;

  label {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text-light);
    margin: 0;
  }

  textarea {
    width: 100%;
    margin: 0;
    height: 10.4rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    background: var(--background);
    border: 1px solid var(--background-2);
    outline: 0;

    font-size: 1.4rem;
    font-family: "Nunito", sans-serif;
    color: var(--text);
  }
`;
