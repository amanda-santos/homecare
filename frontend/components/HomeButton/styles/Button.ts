import styled from "styled-components";

type Props = {
  $color: "primary" | "secondary";
};

export const Button = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3.2rem 1.6rem;

  width: 14.4rem;
  height: 16rem;

  text-align: left;
  color: var(--white);
  font-weight: 700;
  font-size: 1.6rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ $color }) =>
    $color === "primary" ? "var(--primary)" : "var(--secondary)"};
`;
