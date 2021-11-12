import styled from "styled-components";

type Props = {
  $color: "primary" | "secondary";
};

export const Button = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem;

  width: 14.4rem;
  height: 16rem;

  text-align: left;
  color: var(--white);
  font-weight: 700;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ $color }) =>
    $color === "primary" ? "var(--primary)" : "var(--secondary)"};
  transition: all 500ms ease;
  opacity: 1;

  span {
    margin-top: 0.8rem;
  }

  p {
    margin-bottom: 0.8rem;
    font-size: 2rem;
  }

  &:hover {
    background-color: var(--white);
    box-shadow: 0 0 0 2px
      ${({ $color }) =>
        $color === "primary" ? "var(--primary)" : "var(--secondary)"};

    p,
    span {
      color: ${({ $color }) =>
        $color === "primary" ? "var(--primary)" : "var(--secondary)"};
    }

    /* filter: brightness(0.9); */

    /* span,
    p {
      filter: brightness(1);
    } */
  }
`;
