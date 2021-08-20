import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    input,
    select {
      width: 290px;
    }
  }
`;
