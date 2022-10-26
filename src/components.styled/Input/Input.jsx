import styled from 'styled-components';

export const NameField = styled.input.attrs({
  type: 'search',
  placeholder: 'Name',
})`
  width: 90%;
  font-size: 1.8em;
  padding: 0.1em;
  margin: 0.3em auto;
  display: block;
  box-sizing: border-box;
  background-color: var(--background-1-dark);
  color: var(--font-color);
  border: none;
  border-bottom: 3px solid var(--background-2);
  outline: none;
  
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &:focus {
    background-color: var(--background-1-light);
    border-bottom-color: var(--background-3);
  }
  &::placeholder {
    color: var(--font-color);
    opacity: 0.5;
  }
`;
export const ShortDescription = styled.textarea.attrs({
  placeholder: 'Short Description',
  rows: 10,
})`
  width: 90%;
  resize: none;
  padding: 0.3em;
  font-size: 1.2em;
  box-sizing: border-box;
  background-color: var(--background-1-dark);
  color: var(--font-color);
  border: 3px solid var(--background-2);
  border-radius: 0.2em;
  outline: none;
  &:focus {
    background-color: var(--background-1-light);
    border-color: var(--background-3);
  }
  &::placeholder {
    color: var(--font-color);
    opacity: 0.5;
  }
`;

export const LabeledInput = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: flex-end;
  position: static;
  width: 100%;
  & > input {
    width: 50%;
    height: 2em;
    background-color: var(--background-1-dark);
    color: var(--font-color);
    border: none;
    border-bottom: 3px solid var(--background-2);
    outline: none;
    text-align: center;
    font-size: 1.2em;
    box-sizing: border-box;
    -moz-appearance: textfield;
    padding-inline: 0.5em;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      background-color: var(--background-1-light);
      border-bottom-color: var(--background-3);
    }
    &::placeholder {
      color: var(--font-color);
      opacity: 0.5;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  & > label {
    font-size: ${(props) => props.labelFontSize};
    width: 50%;
  }
`;
