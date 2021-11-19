import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.6rem;
    font-weight: 600;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 23.2rem;
    height: 4.8rem;
    margin-top: 0.8rem;
    border-radius: 0.5rem;
    background: var(--background);
    border: 1px solid var(--background-2);
    outline: 0;
    padding: 0 1.2rem;

    font-size: 1.6rem;
    font-family: "Nunito", sans-serif;
    color: var(--text);
  }

  &:after {
    content: url(/images/select.svg);
    width: 0.8rem;
    font-size: 1.4rem;
    right: 1.6rem;

    top: 4.2rem;
    padding: 0 0 2px;

    position: absolute;
    pointer-events: none;
  }
`;
