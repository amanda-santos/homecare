import styled from "styled-components";
import { breakingPointPx } from "../../../styles/constants";

export const HomeWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100vh;
    display: block;
  }

  @media (max-width: ${breakingPointPx.lg}) {
    img {
      display: none;
    }
  }
`;
