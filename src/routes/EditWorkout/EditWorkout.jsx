import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { database } from '../../api/db';
import {
  DaySelectorBtn,
  NavbarButton,
} from '../../components.styled/Button/Button';
import { NameField } from '../../components.styled/Input/Input';
import { MainTitle } from '../../components.styled/Label/Label';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import {
  FlexWrapper,
  ShowDays,
  ShowExercises,
} from '../../components.styled/Wrapper/Wrapper';
import ExerciseSet from '../../components/Exercise/ExerciseSet';
import {
  isFormValid,
  moveArrayItemDown,
  moveArrayItemUp,
  WEEK_DAYS,
} from '../../utils/utils';

function EditWorkout(props) {
  const [selectedDays, setSelectedDays] = useState([
    WEEK_DAYS[new Date().getDay()],
  ]);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const lstName = useRef('');
  const nameRef = useRef(null);

  const { workoutid } = useParams();
  const navigate = useNavigate();

  function handleSelectDay(e) {
    if (e.target.className.includes('selected')) {
      setSelectedDays(selectedDays.filter((i) => i !== e.target.value));
      return;
    }
    setSelectedDays([].concat(selectedDays, [e.target.value]));
  }

  async function handleGotSelectExercises() {
    if (!isFormValid([nameRef])) {
      console.log('falta o nome');
      return;
    }

    const data = {
      name: nameRef.current.value,
      weekdays: selectedDays,
      exercises: selectedExercises,
    };

    if (workoutid) {
      data['id'] = Number.parseInt(workoutid);
    }

    try {
      const id = await database.workouts.add(data);
      navigate(`/select-exercise/${id}`);
    } catch {
      navigate(`/select-exercise/${workoutid}`);
    }
  }

  async function handleCreateWorkout() {
    if (!isFormValid([nameRef])) {
      console.log('falta o nome');
      return;
    }

    const data = {
      name: nameRef.current.value,
      weekdays: selectedDays,
      exercises: selectedExercises.map((i) => {
        if (i) return i.id;
      }),
    };

    if (workoutid) {
      data['id'] = Number.parseInt(workoutid);
    }

    try {
      const id = await database.workouts.add(data);
      navigate(`/`);
    } catch {
      await database.workouts
        .where('id')
        .equals(Number.parseInt(workoutid))
        .modify(data)
        .catch((err) => console.log('Modify Error'));
      navigate(`/`);
    }
  }

  async function loadWorkoutInfo() {
    const data = await database.workouts.get(Number.parseInt(workoutid));

    lstName.current = data.name;
    setSelectedDays(data.weekdays);
    return data.exercises;
  }

  async function loadWorkoutExercises(data) {
    const exerciseData = await database.exercises.bulkGet(data);
    setSelectedExercises(exerciseData);
  }

  async function deleteWorkout(woId, callback) {
    await database.workouts.where('id').equals(Number.parseInt(woId)).delete();
    callback();
  }

  function handleMoveUp(exId) {
    const nArray = moveArrayItemUp(selectedExercises, exId);
    setSelectedExercises(nArray);
  }

  function handleMoveDown(exId) {
    const nArray = moveArrayItemDown(selectedExercises, exId);
    setSelectedExercises(nArray);
  }

  useEffect(() => {
    if (workoutid) {
      loadWorkoutInfo().then((res) => {
        loadWorkoutExercises(res);
      });
    }
  }, []);

  return (
    <FlexWrapper>
      <StyledNavbar>
        <NavbarButton onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavbarButton>

        <MainTitle className='center'>Create Workout</MainTitle>

        <NavbarButton
          onClick={() => {
            // navigate('');
            // console.log('click');
            handleCreateWorkout();
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </NavbarButton>
      </StyledNavbar>
      <ShowDays days={7}>
        {WEEK_DAYS.map((day) => (
          <DaySelectorBtn
            key={day}
            className={selectedDays.includes(day) ? 'selected' : ''}
            onClick={handleSelectDay}
            value={day}
          >
            {day.slice(0, 3)}
          </DaySelectorBtn>
        ))}
      </ShowDays>
      <form onSubmit={(e) => e.preventDefault()}>
        <NameField
          type='text'
          placeholder='name'
          ref={nameRef}
          defaultValue={lstName.current}
        />
      </form>
      <h2 className='center'>Exercises:</h2>
      <ShowExercises className='center'>
        <DaySelectorBtn onClick={handleGotSelectExercises}>
          Select Exercises
        </DaySelectorBtn>
        {selectedExercises.map((exercise, idx) => {
          if (!exercise) return '';
          return (
            <ExerciseSet
              key={exercise.id}
              exercise={exercise}
              moveable
              editable
              moveUp={() => handleMoveUp(idx)}
              moveDown={() => handleMoveDown(idx)}
            />
          );
        })}
      </ShowExercises>
      {workoutid && (
        <DaySelectorBtn
          onClick={() => {
            deleteWorkout(workoutid, () => {
              navigate('/');
            });
          }}
          style={{ width: '50%', margin: '0.5em auto' }}
        >
          Delete Workout
        </DaySelectorBtn>
      )}
    </FlexWrapper>
  );
}

export default EditWorkout;
