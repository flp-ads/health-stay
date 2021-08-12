import styled from "styled-components";

export const StyledInput = styled.div`
  border-bottom: 1px solid var(--medium-gray);
  display: flex;
  align-items: center;
  margin: 0 2px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 10px;
    color: var(--medium-gray);
  }

  :hover {
    border-bottom: 1px solid var(--light-green);
  }
`;
