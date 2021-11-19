import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  width: 23.2rem;
  height: 4.8rem;

  color: var(--white);
  font-weight: 700;
  font-size: 1.6rem;

  border: none;
  border-radius: 0.5rem;
  background-color: var(--secondary);
  transition: all 500ms ease;

  span {
    padding-top: 0.6rem;
  }

  &:hover {
    background-color: #dc4b3d;
  }
`;
