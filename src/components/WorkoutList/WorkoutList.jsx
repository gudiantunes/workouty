import React, { useEffect, useState } from 'react';
import { database } from '../../api/db.js';
import { ShowExercises } from '../../components.styled/Wrapper/Wrapper';
import Workout from '../Workout/Workout';

function WorkoutList({ days }) {
  const [allWorkouts, setAllWorkouts] = useState([]);

  async function fetchWorkouts() {
    const data = await database.workouts.toArray();
    return data.filter((i) => {
      return i.weekdays.some((day) => days.includes(day));
    });
  }

  useEffect(() => {
    fetchWorkouts().then((data) => {
      setAllWorkouts(data);
    });
  }, [days]);

  return (
    <ShowExercises className='center'>
      {allWorkouts?.map((wo) => {
        return <Workout workout={wo} key={wo.id} />;
      })}
    </ShowExercises>
  );
}

export default WorkoutList;
