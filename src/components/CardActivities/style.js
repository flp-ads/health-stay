import styled from "styled-components";
import card_light from "../../assets/light_card.svg";

export const CardActivitiesContainer = styled.div`
  display: flex;
  background-color: var(--light-green);
  border-radius: var(--card-border-radius);
  width: 80%;
  height: 100px;

  margin: 2rem;
  @media (min-width: 900px) {
    max-width: 450px;
    height: 130px;
  }
`;

export const Background = styled.div`
  width: 100%;
  background: url(${card_light});
  background-size: contain;
  width: 40%;

  @media (min-width: 900px) {
    max-width: 150px;
    height: 130px;
  } ;
`;

export const CardActivitiesContent = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  h3 {
    color: var(--dark-green);
  }

  @media (min-width: 900px) {
    padding: 1rem;
  }
`;

export const CardActivitiesTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  button {
    color: var(--red);
    background: none;
    border: none;
  }

  svg {
    width: 17px;
  }

  @media (min-width: 900px) {
    h3 {
      font-size: 26px;
    }
  }
`;

export const CardActivitiesInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: normal;
  }
  p {
    color: var(--medium-gray);
  }
`;
