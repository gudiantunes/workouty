import {
  faArrowLeft,
  faCheck,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../api/db';
import { NavbarButton } from '../../components.styled/Button/Button';
import { MainTitle } from '../../components.styled/Label/Label';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import {
  FlexWrapper,
  ShowExercises,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseSet from '../../components/Exercise/ExerciseSet';
import ExerciseSingle from '../../components/Exercise/ExerciseSingle';
import RestTimeSelector from '../../components/RestTimeSelector/RestTimeSelector';
import { moveArrayItemDown, moveArrayItemUp } from '../../utils/utils';

function PreviewWorkout(props) {
  const [exercises, setExercises] = useState([]);
  const [restTime, setRestTime] = useState(20);

  const exerciseData = useRef();

  const { workoutid } = useParams();
  const navigate = useNavigate();

  function subdivideExercises(exercises) {
    const newExerciseArray = [];
    for (const exercise of exercises) {
      for (let i = 0; i < Number.parseInt(exercise.sets); i++) {
        const newExercise = {
          ...exercise,
          id: exercise.name + i,
          sets: i + 1,
          idx: exercise.id,
        };
        newExerciseArray.push(newExercise);
      }
    }
    return newExerciseArray;
  }

  async function loadWorkoutInfo() {
    const data = await database.workouts.get(Number.parseInt(workoutid));
    exerciseData.current = data.exercises;
    return data.exercises;
  }

  async function loadWorkoutExercises(data) {
    const tmpExerciseData = await database.exercises.bulkGet(data);
    const sub = subdivideExercises(tmpExerciseData);
    setExercises(sub);
  }

  function handleMoveUp(exId) {
    const nArray = moveArrayItemUp(exercises, exId);
    setExercises(nArray);
  }

  function handleMoveDown(exId) {
    const nArray = moveArrayItemDown(exercises, exId);

    setExercises(nArray);
  }

  useEffect(() => {
    if (workoutid) {
      loadWorkoutInfo().then((res) => {
        loadWorkoutExercises(res);
      });
    }
  }, []);

  useEffect(() => {
    exerciseData.current = exercises.map((i) => i.idx);
  }, [exercises]);

  return (
    <FlexWrapper>
      <StyledNavbar>
        <NavbarButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavbarButton>

        <MainTitle className='center'>Preview Workout</MainTitle>

        <NavbarButton
          onClick={() => {
            navigate(
              `/activity/${workoutid}/${restTime}/${exerciseData.current.join(
                ''
              )}`
            );
            // handleCreateWorkout();
          }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </NavbarButton>
      </StyledNavbar>
      <RestTimeSelector
        className='center'
        time={restTime}
        setTime={setRestTime}
      />
      <h2 className='center'>{exercises.length} Exercises:</h2>
      <ShowExercises className='center'>
        {exercises.map((exercise, idx) => {
          return (
            <ExerciseSet
              key={exercise.id}
              exercise={exercise}
              moveable
              editable
              single
              moveUp={() => handleMoveUp(idx)}
              moveDown={() => handleMoveDown(idx)}
            />
          );
        })}
      </ShowExercises>
    </FlexWrapper>
  );
}

export default PreviewWorkout;
