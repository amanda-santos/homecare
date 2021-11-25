import styled from "styled-components";

export const InputWrapper = styled.div<{ $labelColor: "white" | "text-light" }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ $labelColor }) => `var(--${$labelColor})`};
  }

  input {
    width: 100%;
    height: 4.8rem;
    margin-top: 0.8rem;
    border-radius: 0.5rem;
    background: var(--background);
    border: 1px solid var(--background-2);
    outline: 0;
    padding: 0 1.2rem;

    font-size: 1.4rem;
    font-family: "Nunito", sans-serif;
    color: var(--text);
  }
`;
