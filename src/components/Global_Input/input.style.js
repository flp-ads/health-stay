import styled, { css } from "styled-components";

export const StyledInput = styled.div`
  color: var(--medium-gray);
  display: flex;
  flex-direction: column;
  text-align: center;

  div {
    border-bottom: 1px solid var(--medium-gray);
    align-items: center;
    display: flex;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 10px;
  }

  div:hover {
    border-bottom: 1px solid var(--light-green);
    color: var(--light-green);
  }

  ${(props) =>
    props.isDenied &&
    css`
      color: var(--red);
      div {
        border-color: var(--red);
      }
    `}
`;
