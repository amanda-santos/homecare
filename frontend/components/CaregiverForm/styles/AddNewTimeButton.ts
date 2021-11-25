import styled from "styled-components";

export const AddNewTimeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0;
  margin: 3.2rem 0 0.8rem 0;

  color: var(--secondary);
  font-weight: 700;
  font-size: 1.6rem;

  border: none;
  background-color: var(--background);
  transition: all 500ms ease;

  &:hover {
    text-decoration: underline;
  }
`;
