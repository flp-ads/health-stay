import styled, { css } from "styled-components";
import { GlobalContainer } from "../../styles/global";
import { motion } from "framer-motion";

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

export const Username = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--dark-green);
  margin-bottom: 1.5rem;

  span {
    font-weight: bold;
  }

  p {
    color: var(--medium-gray);
    font-size: 1rem;
    margin-top: 0.25rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
    font-size: 2.25rem;

    p {
      font-size: 1.25rem;
    }
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

export const NavigationButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${(props) =>
    props.isActive ? css`var(--dark-green)` : css`var(--medium-gray)`};
  font-weight: normal;
  font-size: 18px;
  span {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const Main = styled(GlobalContainer)`
  /* padding: 2rem; */
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
