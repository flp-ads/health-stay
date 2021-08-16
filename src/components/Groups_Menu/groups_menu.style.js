import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Menu = styled(motion.nav)`
  z-index: 100;
  position: fixed;
  width: 100%;
  padding: 1rem 0 0.5rem;
  background-color: var(--white);
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  bottom: 0;
  left: 0;

  @media only screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: initial;
    top: 50%;
    transform: translateY(-43%);
    width: min-content;
    border-radius: 0 2rem 2rem 0;
    align-items: center;
    padding: 2rem;
    height: clamp(300px, 80%, 1000px);
    gap: 2rem;
  }
`;

export const Title = styled(motion.p)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

export const MenuList = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled(motion.div)`
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  color: ${(props) =>
    props.isCurrent ? css`var(--light-green)` : css`var(--medium-gray)`};
  font-weight: ${(props) => (props.isCurrent ? "bold" : "normal")};

  svg {
    font-size: 1.5rem;
  }
`;
