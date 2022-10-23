import styled, { css } from 'styled-components';

export const WorkoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  background-color: var(--background-1-dark);
  padding-block: 0.5em;
  border-radius: 0.5em;
  border: 2px solid var(--accent-color);
  padding: 1em 0.2em;
  & > .left,
  & > .right {
    grid-row: span 2;
    font-size: 1.5em;
  }
  & > .name {
    font-weight: bold;
  }

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--accent-color)
  }
`;
