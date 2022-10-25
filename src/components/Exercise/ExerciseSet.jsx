import {
  faCaretDown,
  faCaretUp,
  faCircle,
  faCircleCheck,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExerciseWrapper } from '../../components.styled/StyledExercise/StyledExercise';

function MoveBtns(props) {
  return (
    <div
      className='left'
      style={{
        display: 'grid',
      }}
    >
      <button onClick={props.moveUp}>
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
      <button onClick={props.moveDown}>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
}

function SelectBtn(props) {
  return (
    <button className='left' onClick={props.onClick}>
      {!props.selected && <FontAwesomeIcon icon={faCircle} />}
      {props.selected && <FontAwesomeIcon icon={faCircleCheck} />}
    </button>
  );
}

function Editbtn(props) {
  return (
    <button className='right' onClick={props.onClick}>
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}

function ExerciseSet(props) {
  const navigate = useNavigate();
  return (
    <ExerciseWrapper {...props}>
      {props.moveable && (
        <MoveBtns moveUp={props.moveUp} moveDown={props.moveDown} />
      )}
      {props.selectable && (
        <SelectBtn
          selected={props.selected}
          onClick={() => props.onSelectExercise(props.exercise.id)}
        />
      )}
      <span className='name'>{props.exercise.name}</span>
      {props.editable && (
        <Editbtn
          onClick={() => {
            navigate(`/edit-exercise/${props.exercise.id}`);
          }}
        />
      )}
      {/* {props.deleteable && <MoveBtns />} */}
      {props.single ? (
        <span>Set {props.exercise.sets}</span>
      ) : (
        <span>{props.exercise.sets} Sets</span>
      )}
      <span>{props.exercise.reps} Reps</span>
    </ExerciseWrapper>
  );
}

export default ExerciseSet;
