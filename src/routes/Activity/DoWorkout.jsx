import React, { useEffect, useRef, useState } from 'react';
import { LabeledInput } from '../../components.styled/Input/Input';
import { MainTitle, TextBox, Title } from '../../components.styled/Label/Label';
import {
  FlexWrapper,
  RepSetWrapper,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseFooter from '../../components/ExerciseFooter/ExerciseFooter';
import ExerciseTimer from '../../components/Timer/ExerciseTimer';
import { setInputValue } from '../../utils/utils';

function DoWorkout({ exercise, onSkipExercise, onDoneExercise }) {
  const [finishedTime, setFinishedTime] = useState(false);

  const repsRef = useRef();
  const timerRef = useRef();

  function finishExercise() {
    const exerciseData = {
      ...exercise,
      lstReps: repsRef.current.value || exercise.reps,
      lstTime: timerRef.current.getTime(),
    };
    onDoneExercise(exerciseData);
  }

  useEffect(() => {
    if (timerRef.current?.done) {
    }
  }, [finishedTime]);

  return (
    <FlexWrapper gap='2em'>
      <MainTitle className='center' fontColor width='90%'>
        {exercise.name}
      </MainTitle>
      <TextBox className='center'>{exercise.description}</TextBox>
      <div style={{ width: '70%' }} className='center'>
        <LabeledInput className='center' labelFontSize='1.9em'>
          <input
            id='reps'
            type='number'
            size='2'
            ref={repsRef}
            placeholder={
              exercise.maxed ? '0' : exercise.timed ? '0' : exercise.reps
            }
          />
          <label htmlFor='reps'>
            {exercise.maxed ? '= ' : '/'}
            {exercise.reps} {exercise.timed ? 'Secs' : 'Reps'}
          </label>
        </LabeledInput>
      </div>
      <RepSetWrapper className='center'>
        <LabeledInput labelFontSize='1.2em'>
          <label htmlFor='lstReps'>Last Reps:</label>
          <input
            id='lstReps'
            value={
              exercise.timed ? '-' : exercise.lstReps ? exercise.lstReps : 0
            }
            size={2}
            readOnly
          />
        </LabeledInput>
        <LabeledInput labelFontSize='1.2em'>
          <label htmlFor='lstTime'>Last Time:</label>
          <input
            id='lstTime'
            value={`${exercise.lstTime ? exercise.lstTime : 0} sec`}
            size={2}
            readOnly
          />
        </LabeledInput>
      </RepSetWrapper>
      <ExerciseTimer
        className='center'
        ref={timerRef}
        targetTime={exercise.timed ? exercise.reps : null}
        onTimerDone={() => {
          setFinishedTime(true);
        }}
        onTimeUpdate={(time) => {
          if (exercise.timed) {
            setInputValue(repsRef, time);
          }
        }}
      />

      <ExerciseFooter onSkip={onSkipExercise} onDone={finishExercise} />
    </FlexWrapper>
  );
}

export default DoWorkout;
