import styled from "styled-components";

export const Button = styled.button<{ $color: "primary" | "secondary" }>`
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
  }
`;
