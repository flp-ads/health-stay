import styled from 'styled-components';

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