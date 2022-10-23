import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { database } from '../../api/db.js';
import {
  DaySelectorBtn,
  NavbarButton,
} from '../../components.styled/Button/Button';
import {
  LabeledInput,
  NameField,
  ShortDescription,
} from '../../components.styled/Input/Input';
import { MainTitle } from '../../components.styled/Label/Label';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import {
  FlexWrapper,
  RepSetWrapper,
} from '../../components.styled/Wrapper/Wrapper';
import { isFormValid } from '../../utils/utils';

function EditExercise(props) {
  const { exerciseid } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    reps: '',
    sets: '',
  });

  const nameRef = useRef(null);
  const descRef = useRef(null);
  const repsRef = useRef(null);
  const setsRef = useRef(null);

  function resetForm() {
    nameRef.current.value = '';
    repsRef.current.value = 0;
    setsRef.current.value = 0;
    descRef.current.value = '';
  }

  async function submitExercise() {
    if (!isFormValid([nameRef, repsRef, setsRef])) return;

    const data = {
      name: nameRef.current.value,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      description: descRef.current.value,
    };

    if (exerciseid) {
      data['id'] = Number.parseInt(exerciseid);
    }

    try {
      const id = await database.exercises.add(data);
      resetForm();
      navigate(-1);
    } catch (err) {
      await database.exercises
        .where('id')
        .equals(Number.parseInt(exerciseid))
        .modify(data);
      navigate(-1);
    }
  }

  async function loadExercise() {
    const data = await database.exercises.get(Number.parseInt(exerciseid));
    setFormData(data);
    // if (data) {
    // }
  }

  async function deleteExercise(exId, callback) {
    await database.exercises.where('id').equals(Number.parseInt(exId)).delete();
    callback();
  }

  useEffect(() => {
    if (exerciseid) {
      loadExercise();
    }
  }, []);

  return (
    <FlexWrapper>
      <StyledNavbar>
        <NavbarButton onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavbarButton>

        <MainTitle className='center'>Edit Exercise</MainTitle>

        <NavbarButton
          onClick={() => {
            submitExercise();
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </NavbarButton>
      </StyledNavbar>

      <NameField ref={nameRef} defaultValue={formData.name} />
      <ShortDescription
        className='center'
        ref={descRef}
        defaultValue={formData.description}
      />
      <RepSetWrapper className='center'>
        <LabeledInput>
          <input
            id='reps'
            type='number'
            // size='5'
            ref={repsRef}
            placeholder={0}
            defaultValue={formData.reps}
          />
          <label htmlFor='reps'>Reps</label>
        </LabeledInput>
        <LabeledInput>
          <input
            id='sets'
            type='number'
            // size='5'
            ref={setsRef}
            placeholder={0}
            defaultValue={formData.sets}
          />
          <label htmlFor='sets'>Sets</label>
        </LabeledInput>
      </RepSetWrapper>
      {exerciseid && (
        <DaySelectorBtn
          onClick={() => {
            deleteExercise(exerciseid, () => navigate(-1));
          }}
          style={{
            width: '50%',
            marginInline: 'auto',
            marginTop: 'auto',
            marginBottom: '0.5em',
          }}
        >
          Delete Exercise
        </DaySelectorBtn>
      )}
    </FlexWrapper>
  );
}

export default EditExercise;
