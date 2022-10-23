import { faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { MainTitle, Title } from '../../components.styled/Label/Label';
import { TimerCircle } from '../../components.styled/Wrapper/Wrapper';
import ExerciseSet from '../../components/Exercise/ExerciseSet';

function Prepare({ time, setActivity, next, nextExercise }) {
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

  return (
    <div className='center'>
      <MainTitle>Get Ready</MainTitle>
      <TimerCircle
        onClick={() => {
          console.log('click');
          setIsPaused(!isPaused);
        }}
      >
        {!isPaused? <span>{time - elapsedTime}</span> : <FontAwesomeIcon icon={faPause}/>}
      </TimerCircle>
      <ExerciseSet exercise={nextExercise} selectable editable />
    </div>
  );
}

export default Prepare;
