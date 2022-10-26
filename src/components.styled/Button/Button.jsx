import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarButton = styled.button`
  width: 90%;
  height: 90%;
  align-self: center;
  justify-self: center;
  font-size: 2em;
  background-color: var(--background-1);
  border-color: var(--accent-color);
  border-radius: 0.1em;
  margin: 2px;
  color: var(--accent-color);
  cursor: pointer;
  &:hover {
    background-color: var(--background-1-light);
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledLinkText = styled(StyledLink)`
  color: var(--font-color);
  text-decoration: none;
  font-weight: bold;
`;

export const DaySelectorBtn = styled.button`
  width: 100%;
  padding: 0.3em;
  font-size: 1.1em;
  text-transform: capitalize;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  background-color: var(--background-1-light);
  /* border: none; */
  border-radius: 0.2em;
  box-sizing: border-box;
  &.selected {
    background-color: var(--accent-color);
    color: black;
    /* border-color: black; */
    &:hover {
      background-color: var(--accent-color-dark);
    }
  }
  &:hover {
    background-color: var(--background-1);
  }
`;

export const NoBgButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: ${(props) =>
    props.active ? 'var(--accent-color)' : 'var(--background-2)'}; ;
`;

export const FooterButton = styled.button`
  border: 2px solid var(--accent-color);
  width: 100%;
  height: 100%;
  font-size: 2em;
  padding-block: 0.2em;
  color: ${(props) => props.color || 'var(--background-1)'};
  background-color: var(--accent-color);
  &:hover {
    background-color: var(--accent-color-dark);
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--background-1);
      color: var(--accent-color);
      &:hover {
        background-color: var(--background-1-light);
      }
    `}
`;
