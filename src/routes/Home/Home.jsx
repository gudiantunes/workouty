import React, { useState } from 'react';
import {
  DaySelectorBtn,
  NavbarButton,
  StyledLink,
} from '../../components.styled/Button/Button';
import { StyledNavbar } from '../../components.styled/Navbar/Navbar';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FlexWrapper, ShowDays } from '../../components.styled/Wrapper/Wrapper';
import { WEEK_DAYS } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { MainTitle } from '../../components.styled/Label/Label';

function Home(props) {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState([
    WEEK_DAYS[new Date().getDay()],
  ]);

  function handleSelectDay(e) {
    if (e.target.className.includes('selected')) {
      setSelectedDays(selectedDays.filter((i) => i !== e.target.value));
      return;
    }
    setSelectedDays([].concat(selectedDays, [e.target.value]));
  }

  return (
    <FlexWrapper>
      <StyledNavbar>
        <div></div>
        <MainTitle className='center'>Workouty</MainTitle>
        <NavbarButton onClick={() => navigate('/edit-workout')}>
          <FontAwesomeIcon icon={faPlus} />
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
      <WorkoutList days={selectedDays.length > 0 ? selectedDays : WEEK_DAYS} />
    </FlexWrapper>
  );
}

export default Home;
