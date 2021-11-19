import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid var(--light-grey-2);
  background-color: var(--background);
  width: 82.4rem;
  height: 12rem;

  padding: 6.4rem 9.6rem;
`;

export const Cost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-light);
  }
`;
