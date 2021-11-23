import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  $color: "primary" | "secondary" | "green";
}>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.4rem;
  width: 23.2rem;
  height: 4.8rem;

  color: var(--white);
  font-weight: 700;
  font-size: 1.6rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ $color }) => `var(--${$color})`};
  transition: all 500ms ease;

  span {
    padding-top: 0.6rem;
  }

  &:hover {
    background-color: ${({ $color }) => `var(--${$color}-hover)`};
  }
`;
