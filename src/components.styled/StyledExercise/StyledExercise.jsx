import styled, { css } from 'styled-components';

export const ExerciseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  background-color: var(--background-1-dark);
  padding-block: 0.5em;
  border-radius: 0.5em;
  border: 2px solid var(--accent-color);
  padding: 1em 0.2em;
  width: ${(props) => props.width};
  & > .left,
  & > .right {
    grid-row: span 2;
    font-size: 1.5em;
  }
  & > .name {
    grid-column: span 2;
    font-weight: bold;
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
  }

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--accent-color);
  }

  & > div > button {
    padding: 0;
    height: fit-content;
    font-size: 1.2em;
  }

  ${(props) => props.selectable && css``}
`;

export const SelectCircle = styled.div`
  background-color: gray;
  aspect-ratio: 1/1;
  border-radius: 50%;
  width: 2em;
  margin: auto;
  ${(props) =>
    props.selected &&
    css`
      background-color: green;
    `}
`;
