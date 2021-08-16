import styled from "styled-components";
import { GlobalContainer } from "../../styles/global";

export const Container = styled.div`
  padding: 1rem;
  position: relative;
  margin-bottom: 66px;

  h1 {
    color: var(--dark-green);
  }

  @media only screen and (min-width: 768px) {
    margin: 0 3px 0px 200px;
  }
`;

export const Overview = styled(GlobalContainer)`
  flex: 100%;
  margin: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 2rem;
  }
`;

export const Header = styled.h2`
  font-weight: normal;
  color: var(--dark-green);
  margin-bottom: 1rem;
  font-size: 1.5rem;

  span {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    flex: 100%;
    margin: 0;
  }
`;

export const HabitsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoItem = styled.p`
  text-align: center;
  color: var(--medium-gray);
  font-size: 1.2rem;

  p {
    font-weight: bold;
    color: var(--light-green);
  }

  @media only screen and (min-width: 768px) {
    margin: 0 5rem;
  }
`;

export const Main = styled.div``;
