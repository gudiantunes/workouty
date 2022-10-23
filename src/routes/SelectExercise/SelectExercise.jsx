import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLiveQuery } from 'dexie-react-hooks';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../api/db';
import {
  DaySelectorBtn,
  NavbarButton,
} from '../../components.styled/Button/Button';
import { MainTitle } from '../../components.styled/Label/Label';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import {
  FlexWrapper,
  ShowExercises,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseSet from '../../components/Exercise/ExerciseSet';

function SelectExercise(props) {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const { workoutid } = useParams();
  const navigate = useNavigate();
  const allExercises = useLiveQuery(() => database.exercises.toArray());

  async function handleSubmitList() {
    await database.workouts
      .where('id')
      .equals(Number.parseInt(workoutid))
      .modify((wo) => {
        wo.exercises = selectedExercises;
      })
      .catch((err) => console.log('Modify Error'));
    navigate(`/edit-workout/${workoutid}`);
  }

  function handleSelectExercise(exId) {
    if (selectedExercises.includes(exId)) {
      setSelectedExercises(selectedExercises.filter((i) => i !== exId));
    } else {
      setSelectedExercises([...selectedExercises, exId]);
    }
  }

  async function loadExercises() {
    const data = await database.workouts.get(Number.parseInt(workoutid));
    setSelectedExercises(data.exercises);
  }

  useEffect(() => {
    if (workoutid) {
      loadExercises();
    }
  }, []);

  return (
    <FlexWrapper>
      <StyledNavbar>
        <NavbarButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavbarButton>

        <MainTitle className='center'>Select Exercises</MainTitle>

        <NavbarButton
          onClick={() => {
            handleSubmitList();
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </NavbarButton>
      </StyledNavbar>

      <ShowExercises className='center'>
        <DaySelectorBtn onClick={() => navigate(`/edit-exercise/${workoutid}`)}>
          Create Exercise
        </DaySelectorBtn>
        {allExercises?.map((exercise) => {
          return (
            <ExerciseSet
              key={exercise.id}
              exercise={exercise}
              selectable
              editable
              selected={selectedExercises.includes(exercise.id)}
              onSelectExercise={handleSelectExercise}
            />
          );
        })}
      </ShowExercises>
    </FlexWrapper>
  );
}

export default SelectExercise;
