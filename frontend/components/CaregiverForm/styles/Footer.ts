import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid var(--light-grey-2);
  border-radius: 0.8rem;
  background-color: var(--background);
  width: 82.4rem;
  height: 12rem;

  padding: 6.4rem 9.6rem;
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 19.6rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text);
`;
