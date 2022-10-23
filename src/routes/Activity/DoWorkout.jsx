import React, { useRef } from 'react';
import { LabeledInput } from '../../components.styled/Input/Input';
import { MainTitle, TextBox, Title } from '../../components.styled/Label/Label';
import {
  FlexWrapper,
  RepSetWrapper,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseFooter from '../../components/ExerciseFooter/ExerciseFooter';
import ExerciseTimer from '../../components/Timer/ExerciseTimer';

function DoWorkout({ exercise, onSkipExercise, onDoneExercise }) {
  const repsRef = useRef();
  const timerRef = useRef();

  function finishExercise() {
    const exerciseData = {
      ...exercise,
      lstReps: repsRef.current.value,
      lstTime: timerRef.current.getTime(),
    };
    onDoneExercise(exerciseData);
  }

  return (
    <FlexWrapper gap='2em'>
      <MainTitle className='center'>{exercise.name}</MainTitle>
      <TextBox className='center'>
        {exercise.description} {timerRef.current?.getTime()}
      </TextBox>
      <div style={{ width: '70%' }} className='center'>
        <LabeledInput className='center' labelFontSize='2em'>
          <input
            id='reps'
            type='number'
            size='5'
            ref={repsRef}
            placeholder='0'
          />
          <label htmlFor='reps'>/{exercise.reps} Reps</label>
        </LabeledInput>
      </div>
      <RepSetWrapper className='center'>
        <LabeledInput labelFontSize='1.2em'>
          <label htmlFor='lstReps'>Last Reps:</label>
          <input
            id='lstReps'
            value={exercise.lstReps ? exercise.lstReps : 0}
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
      <ExerciseTimer className='center' ref={timerRef} />
      <ExerciseFooter onSkip={onSkipExercise} onDone={finishExercise} />
    </FlexWrapper>
  );
}

export default DoWorkout;
