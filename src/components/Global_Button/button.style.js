import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.isVanilla ? css`var(--vanilla)` : css`var(--light-green)`};
  border: 1px solid
    ${(props) =>
      props.isVanilla ? css`var(--light-green)` : css`var(--vanilla)`};
  color: ${(props) =>
    props.isVanilla ? css`var(--light-green)` : css`var(--vanilla)`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
  max-width: 270px;
  min-width: 210px;
  border-radius: 23px;

  @media screen and (min-width: 768px) {
    height: 63px;
    width: 324px;
    border-radius: 32px;
  }
`;
