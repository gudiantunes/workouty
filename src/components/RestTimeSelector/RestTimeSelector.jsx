import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DaySelectorBtn } from '../../components.styled/Button/Button';
import { TimeSelectorWrapper } from '../../components.styled/Wrapper/Wrapper';

function RestTimeSelector({ className, time, setTime }) {

  return (
    <TimeSelectorWrapper className={className}>
      <DaySelectorBtn
        onClick={() => {
          setTime(Math.max(0, time - 5));
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </DaySelectorBtn>
      <span>{time} sec</span>
      <DaySelectorBtn
        onClick={() => {
          setTime(Math.min(time + 5, 60));
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </DaySelectorBtn>
    </TimeSelectorWrapper>
  );
}

export default RestTimeSelector;
