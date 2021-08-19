import styled from "styled-components";
import CardImage from "../../assets/card_dark.svg";
export const Container = styled.div`
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
export const ImageContainer = styled.div`
  background-color: var(--dark-green);
  background-image: url(${CardImage});
  background-size: 365%;
  background-position: -35px -30px;
  background-repeat: no-repeat;
  width: 50px;
  @media only screen and (min-width: 768px) {
    width: 100px;
    background-size: 175%;
    background-position-x: -25px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding: 8px;
  width: calc(100% - 100px);
  background-color: var(--light-vanilla);
  font-size: var(--card-text-size);
  header {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    button {
      font-size: 20px;
      outline: none;
      background: transparent;
      border: none;
      margin-right: 4px;
    }
    .achieved {
      color: var(--light-green);
    }
    .completed {
      color: var(--light-green);
    }
    .delete {
      color: var(--red);
    }
  }
  h4 {
    color: var(--dark-green);
    font-size: var(--card-title-size);
  }
  p {
    color: var(--light-green);
  }
`;
