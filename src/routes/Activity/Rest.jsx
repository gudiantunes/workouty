import { faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FooterButton } from '../../components.styled/Button/Button';
import { FixedFooter } from '../../components.styled/Footer/Footer';
import { MainTitle, Title } from '../../components.styled/Label/Label';
import {
  FlexWrapper,
  TimerCircle,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseSet from '../../components/Exercise/ExerciseSet';

function Rest({ time, setActivity, next, nextExercise }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setElapsedTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (elapsedTime > time) {
      setActivity(next);
    }
  }, [elapsedTime]);

  function addTime() {
    setElapsedTime((lst) => lst - 10);
  }

  function skipRest() {
    setActivity(next);
  }

  return (
    <FlexWrapper className='center'>
      <MainTitle>Rest</MainTitle>
      <TimerCircle
        onClick={() => {
          console.log('click');
          setIsPaused(!isPaused);
        }}
        width='40%'
      >
        {!isPaused ? (
          <span>{time - elapsedTime}</span>
        ) : (
          <FontAwesomeIcon icon={faPause} />
        )}
      </TimerCircle>
      <ExerciseSet
        exercise={nextExercise}
        selectable
        editable
        width='60%'
        className='center'
      />
      <FixedFooter>
        <FooterButton secondary onClick={addTime}>
          +10s
        </FooterButton>
        <FooterButton onClick={skipRest}>Skip</FooterButton>
      </FixedFooter>
    </FlexWrapper>
  );
}

export default Rest;
