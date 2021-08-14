import styled from "styled-components";
import SideImage from "../../assets/side.svg";
import SideMobileImage from "../../assets/mobile_side.svg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Background = styled.div`
  background: url(${SideMobileImage}) no-repeat center, var(--light-green);
  background-size: auto 100%;
  height: 300px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--dark-green);
    font-weight: normal;
  }

  .title_bold {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 36%;
    max-width: 407px;
    background: url(${SideImage}) no-repeat center, var(--light-green);
    background-size: auto 100%;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media (min-width: 768px) {
    width: 64%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;

  padding: 16px;
  width: 100%;

  h1 {
    color: var(--dark-green);
  }

  button {
    display: flex;
    align-items: center;

    color: var(--dark-green);
    border: none;
    background: transparent;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-self: center;

  margin-top: 80px;

  form {
    margin-bottom: 24px;
  }

  button {
    font-size: 18px;
  }

  .separator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 8px 0;
    width: 320px;

    p {
      margin: 0 32px;
      color: var(--light-green);
    }

    hr {
      width: 90px;
      border: none;
      border-bottom: 1px solid var(--medium-gray);
    }
  }

  @media (min-width: 768px) {
    margin-top: 160px;

    .separator {
      hr {
        width: 100%;
      }
    }
  }
`;
