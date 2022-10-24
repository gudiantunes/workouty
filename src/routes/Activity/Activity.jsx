import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../api/db.js';
import { NavbarButton } from '../../components.styled/Button/Button';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import { FlexWrapper } from '../../components.styled/Wrapper/Wrapper';
import DoWorkout from './DoWorkout';
import End from './End';
import Prepare from './Prepare';
import Rest from './Rest';

function Activity(props) {
  const [activity, setActivity] = useState('prepare');
  const [exerciseId, setExerciseId] = useState(0);
  const [exercise, setExercise] = useState({});

  const navigate = useNavigate();
  const { workoutid, resttime, exerciseidx } = useParams();

  async function getExercise(exId) {
    const exercises = exerciseidx.split('-');
    if (Number.parseInt(exercises[exId])) {
      const data = await database.exercises.get(
        Number.parseInt(exercises[exId])
      );
      setExercise(data);
    }
  }

  useEffect(() => {
    getExercise(exerciseId);
  }, [exerciseId]);

  function getNextExercise() {
    const a = exerciseId;
    setExerciseId((lst) => lst + 1);
    return a + 1;
  }

  function getNextActivity() {
    const exId = getNextExercise();

    if (exId >= exerciseidx.length) {
      return 'end';
    }
    return 'rest';
  }

  function Outlet() {
    switch (activity) {
      case 'workout':
        return (
          <DoWorkout
            exercise={exercise}
            onSkipExercise={() => {
              setActivity(getNextActivity());
            }}
            onDoneExercise={async (exerciseData) => {
              await database.exercises
                .where('id')
                .equals(Number.parseInt(exerciseidx[exerciseId]))
                .modify(exerciseData);
              setActivity(getNextActivity());
            }}
          />
        );
      case 'rest':
        return (
          <Rest
            time={Number.parseInt(resttime)}
            setActivity={setActivity}
            next='workout'
            nextExercise={exercise}
          />
        );
      case 'end':
        return <End />;
      default:
        return (
          <Prepare
            time={10}
            setActivity={setActivity}
            next='workout'
            nextExercise={exercise}
          />
        );
    }
  }

  return (
    <FlexWrapper gap='1em'>
      <StyledNavbar>
        <NavbarButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavbarButton>
      </StyledNavbar>
      {Outlet()}
    </FlexWrapper>
  );
}

export default Activity;
