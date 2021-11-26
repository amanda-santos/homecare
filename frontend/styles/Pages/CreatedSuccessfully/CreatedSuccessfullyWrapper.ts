import styled from "styled-components";

export const CreatedSuccessfullyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  height: 100vh;
  width: 100vw;
  color: var(--white);

  h1 {
    font-size: 4.8rem;
    margin: 1.6rem 0 0 0;
    line-height: 4rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
    margin: 4rem 0;
  }
`;
