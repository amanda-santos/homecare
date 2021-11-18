import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  margin-top: 1.4rem;

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--background);
    border: 1px solid var(--background-2);
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1.6rem;
    font-family: "Nunito", sans-serif;
  }
`;
