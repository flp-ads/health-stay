import styled from "styled-components";
import SideImage from "../../assets/side.svg";
import SideMobileImage from "../../assets/mobile_side.svg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
      flex-direction: row;

  }
`;

export const Background = styled.div`
  background: url(${SideMobileImage}) no-repeat center, var(--light-green);
  background-size: 100%;
  height: 300px;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--dark-green);
  }

  .title_bold {
    font-weight: 700;
  }
  @media (min-width: 768px) {
    height: 100vh;
    width: 35%;
    background: url(${SideImage}) no-repeat center, var(--light-green);
    background-size: 100%;

    .title_bold {
      font-weight: 700;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  
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

      width: 80%;

      p {
          margin: 0 8px;
      }

      hr {
          width: 40%;
          height: 2px;
      }
  }

  @media (min-width: 768px) {
  }
`;
