import styled from "styled-components";
import card from "../../assets/light_card.svg";

export const HabitsCardContainer = styled.div`
  display: flex;
  background-color: var(--dark-green);
  border-radius: var(--card-border-radius);
  width: 80%;
  height: 100px;

  @media (min-width: 768px) {
    max-width: 450px;
    height: 130px;
  }
`;

export const Background = styled.div`
  width: 100%;
  background: url(${card});
  background-size: contain;
  width: 40%;

  @media (min-width: 768px) {
    max-width: 150px;
    height: 130px;
  } ;
`;

export const HabitsCardContent = styled.div`
  background-color: var(--light-vanilla);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const HabitsCardHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: right;
  text-align: end;
  strong {
    color: var(--dark-green);
    font-size: 9px;
  }
  p {
    color: var(--medium-gray);
    font-size: 7px;
  }
`;

export const HabitsCardTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 700;
    color: var(--dark-green);
  }
`;

export const HabitsCardInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--light-green);
    font-size: 12px;
  }
`;

export const HabitsCardFooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  button {
    color: var(--medium-gray);
    margin: 0 5px;
    background: none;
    border: none;
    svg {
      width: 16px;
    }
  }

  @media (min-width: 768px) {
    button {
      svg {
        width: 23px;
      }
    }
  }
`;
