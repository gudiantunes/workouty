import { faEdit, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WorkoutWrapper } from '../../components.styled/StyledWorkout/StyledWorkout';

function Editbtn(props) {
  return (
    <button className='right' onClick={props.onClick}>
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}

function StartBtn(props) {
  return (
    <button className='left' onClick={props.onClick}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
}

function Workout({ workout }) {
  const navigate = useNavigate();

  return (
    <WorkoutWrapper key={workout.id}>
      {/* <div className='left'></div> */}
      <StartBtn onClick={() => navigate(`/preview-workout/${workout.id}`)} />
      <span className='name'>{workout.name}</span>
      <Editbtn onClick={() => navigate(`/edit-workout/${workout.id}`)} />
      {/* <div className='right'>
      </div> */}
      <span className='info'>{workout.exercises.length} Exercises</span>
    </WorkoutWrapper>
  );
}

export default Workout;
