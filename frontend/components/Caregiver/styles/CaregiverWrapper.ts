import styled from "styled-components";

export const CaregiverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: var(--background);
  width: 82.4rem;
  height: fit-content;

  margin-top: 6.4rem;
  padding: 6.4rem 9.6rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
`;
