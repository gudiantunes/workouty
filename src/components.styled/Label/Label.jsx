import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: var(--accent-color);
  font-family: 'Formula-A', sans-serif;
  font-size: 2em;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2em;
`;

export const TextBox = styled.pre`
  display: block;
  border: 3px solid var(--background-2);
  width: 70%;
  padding: 0.7em;
  height: 10em;
  border-radius: 0.5em;
  background-color: var(--background-1-dark);
  overflow: auto;
`;

export const QuoteBox = styled.div`
  display: block;
  border: 3px solid var(--background-2);
  width: 70%;
  padding: 0.7em;
  height: fit-content;
  min-height: 10em;
  border-radius: 0.5em;
  background-color: var(--background-1-dark);
`;

export const MainLink = styled.a`
  color: var(--accent-color);
  &:hover {
    color: var(--accent-color-dark)
  }
`;
