import styled from "styled-components";

export const CardActivitiesContainer = styled.div`
  width: 284px;
  height: 101px;
  display: flex;
  border: 1px solid var(--vanilla);
  background: var(--light-vanilla);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

export const Background = styled.div`
  background-color: var(--light-green);
  width: 30%;
  img {
    width: 100%;
  }
`;

export const CardActivitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  padding: 10px;
`;

export const CardActivitiesTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h4 {
    color: var(--dark-green);
    font-size: var(--card-title-size);
  }
  button {
    background: none;
    border: none;
    svg {
      color: var(--red);
    }
  }
`;

export const CardActivitiesInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h4 {
    color: var(--dark-green);
    font-size: var(--card-title-size);
    font-weight: normal;
  }
  p {
    font-size: var(--card-text-size);
    color: var(--medium-gray);
  }
`;
