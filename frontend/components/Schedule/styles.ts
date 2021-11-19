import styled from "styled-components";

export const ScheduleWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 600;

  width: 9.6rem;
  height: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.6rem;
  justify-content: center;

  border-radius: 1rem;
  border: 0.1rem solid var(--light-grey-2);

  p {
    font-size: 1.2rem;
    color: var(--text-light);
    font-weight: 500;
    margin: 0 0 0.4rem 0;
  }

  h6 {
    font-size: 1.4rem;
    color: var(--title);
    margin: 0;
  }

  span:first-child {
    margin-bottom: 1.2rem;
  }
`;
