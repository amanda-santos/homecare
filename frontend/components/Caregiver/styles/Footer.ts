import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid var(--light-grey-2);
  background-color: var(--background);
  width: 82.4rem;
  height: 12rem;

  padding: 6.4rem 11.2rem 6.4rem 10.4rem;
`;

export const Cost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-light);
    margin-right: 0.8rem;
  }

  h4 {
    font-size: 2.4rem;
    color: var(--secondary);
    font-weight: 800;
  }
`;
