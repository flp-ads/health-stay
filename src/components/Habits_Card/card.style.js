import styled ,{ css } from "styled-components";
import card from "../../assets/card_dark_full.svg";
export const HabitsCardContainer = styled.div`
  background-color: var(--light-vanilla);
  height: 125px;
  border-radius: 1rem;
  max-width: 450px;
  min-width: 20vw;
  width: 100%;
  display: flex;
  overflow: hidden;
  border: 1px solid var(--vanilla);
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    min-width: 450px;
    width: 450px;
    height: 150px;
    flex: 100%;
  }
  @media only screen and (min-width: 950px) {
    min-width: 450px;
    width: 450px;
    height: 150px;
    flex: calc(33% - 2rem);
  }
`;
export const Background = styled.div`
  background-color: var(--dark-green);
  background-image: url(${card});
  background-size: 365%;
  background-position: -35px -30px;
  background-repeat: no-repeat;
  width: 70px;
  @media only screen and (min-width: 768px) {
    width: 125px;
    background-size: 175%;
    background-position-x: -25px;
  }
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
    font-size: var(--card-text-size);
  }
  p {
    font-size: var(--card-text-size);
    color: var(--medium-gray);
  }
`;
export const HabitsCardTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: var(--card-title-size);
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
  align-items: center;
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

export const ProgressContainer = styled.div`
  width: 100px;
  height: 10px;
  background-color: var(--dark-green);
  margin-right: 8px;
  border-radius: 2px;

  @media (min-width: 768px) {
    width: 150px;
  }
`

export const ProgressBar = styled.div`
  width: ${props => props.how_much_achieved}%;
  height: 10px;
  background-color: var(--light-green);

  border-radius: 2px;
`
export const UpdateButton = styled.button`

    color: var(--light-green);


`