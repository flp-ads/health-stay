import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import bg_img from "../../assets/light_card_full.svg";

export const Container = styled(motion.div)`
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

export const UsersBottom = styled(motion.div)`
  text-transform: uppercase;
  background-color: var(--light-green);
  color: var(--dark-green);
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  z-index: ${(props) => (props.Overflow ? 0 : 1)};
  right: calc(${(props) => props.index} * 20px);
  font-size: ${(props) => (props.Overflow ? css`0.65rem` : css`1rem`)};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.25);
`;

export const CardImage = styled.div`
  background-color: var(--light-green);
  background-image: url(${bg_img});
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

export const Text = styled.div`
  width: calc(100% - 1rem);
  margin-right: 1rem;

  h4 {
    font-size: var(--card-title-size);
    color: var(--dark-green);
  }

  p {
    font-size: var(--card-text-size);
    color: var(--medium-gray);
  }
`;

export const Icon = styled.div`
  position: absolute;
  padding: 1rem;
  top: 0;
  right: 0;
  color: ${(props) =>
    props.isSubscribed ? css`var(--red)` : css`var(--medium-gray)`};
  cursor: ${(props) => (props.isSubscribed ? "default" : "pointer")};
`;
export const Users = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: min-content;
  height: 25px;
  width: 125px;
`;

export const Info = styled.div`
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  flex: 1;
`;
