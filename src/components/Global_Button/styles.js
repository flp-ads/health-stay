import styled from "styled-components";

export const StyledButton = styled.button`
  ${(props) =>
    props.isVanilla
      ? `{background-color: var(--vanilla); border: 1px solid var(--light-green); color: var(--light-green)}`
      : `{background-color: var(--light-green); border: 1px solid var(--vanilla); color: var(--vanilla)}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 270px;
  border-radius: 23px;

  @media screen and (min-width: 768px) {
    height: 63px;
    width: 324px;
    border-radius: 32px;
  }
`;
