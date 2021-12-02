import styled from "styled-components";

export const TextAreaWrapper = styled.div<{
  $labelColor: "white" | "text-light";
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  label {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ $labelColor }) => `var(--${$labelColor})`};
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
