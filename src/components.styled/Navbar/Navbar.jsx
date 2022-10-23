import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 3em;
  width: 100%;
  & > .center {
    justify-self: center;
    align-self: center;
  }
`;
