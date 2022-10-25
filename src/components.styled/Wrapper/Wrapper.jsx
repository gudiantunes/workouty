import styled from 'styled-components';

export const ShowDays = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.days}, auto)` || '1fr';
  }};
  justify-items: center;
  margin-block: 0.5em;
  gap: 0.1em;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  gap: ${(props) => props.gap || '0.2em'};
  & .center {
    align-self: center;
  }
`;

export const ShowExercises = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin-block: 0.5em 1em;
  padding: 0.5em;
  border-radius: 0.3em;
  background-color: var(--background-1-light);
  gap: 0.5em;
  overflow: scroll;
`;

export const RepSetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-direction: column; */
  width: 90%;
  /* justify-content: space-between; */
  gap: 4em;
  margin-block: 1em;
  box-sizing: border-box;
  /* background-color: red; */
`;

export const TimeSelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 2fr;
  justify-items: center;
  align-items: center;
  font-size: 1.5em;
  margin-block: 1em;
  gap: 0.5em;
`;

export const TimerCircle = styled.div`
  display: grid;
  aspect-ratio: 1/1;
  box-sizing: border-box;
  width: ${(props) => props.width || '90%'};
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  padding: 0.1em;
  border: 5px solid var(--accent-color);
  border-radius: 50%;
  background-color: var(--background-1-light);
  color: var(--accent-color);
  font-size: 5em;
  font-weight: bolder;
  text-shadow: 3px 3px 3px #000a;
  box-shadow: inset 3px 3px 3px #000a;
  svg {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.5));
  }
`;

export const RoundedWrapper = styled.div`
  border-radius: 2em;
  background-color: var(--background-1-dark);
  border: 3px solid;
  border-color: ${(props) =>
    props.active ? 'var(--accent-color)' : 'var(--background-2)'};
  padding: 0.5em 1em;
  width: 75%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
