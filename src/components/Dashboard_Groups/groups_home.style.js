import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { GlobalContainer } from "../../styles/global";

export const Container = styled(motion.div)`
  padding: 1rem;
  position: relative;
  margin-bottom: 66px;

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

export const Cards = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Overview = styled(GlobalContainer)`
  flex: 100%;

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

export const OverviewItem = styled.p`
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

export const MyGroups = styled(Overview)`
	padding: 1rem;

	@media only screen and (min-width: 768px) {
		flex: 1;
		padding: 2rem;
	}
`

export const SubMenuContainer = styled(Overview)`
	padding: 1rem;

	@media only screen and (min-width: 768px) {
		flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
		padding: 2rem;
    margin: 1rem 0 0 0;
	}
`

export const SubMenuMobile = styled(Overview)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const SubMenuDesktop = styled.header`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 2rem;
  }
`

export const CardsList = styled.div`
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

export const SubMenuHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
      flex-flow: row wrap;
  }
`

export const CardsListMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${(props) =>
    props.isActive ? css`var(--light-green)` : css`var(--medium-gray)`};
  font-weight: normal;
  font-size: 32px;
  span {
    font-weight: bold;
  }
`;

export const All = styled(motion.p)`
  cursor: pointer;
  margin: 1rem 1rem 0 0;
  text-align: right;
  font-size: 0.8rem;
  color: var(--light-green);

  span {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    flex: 100%;
  }
`;

export const CategoryContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  input,
  select,
  button {
    margin-top: 16px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--medium-gray);

  select {
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 1rem;
    border: none;
    background: none;
    color: var(--medium-gray);
    margin-bottom: 8px;
  }

  svg {
    color: var(--medium-gray);
    margin-right: 8px;
  }
`;
