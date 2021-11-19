import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  img {
    margin-right: 1.6rem;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--title);

  h4 {
    font-size: 2.4rem;
    margin: 0;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 300;
    margin: 0;
  }
`;
