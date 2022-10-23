import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Activity from './Activity/Activity';
import EditExercise from './EditExercise/EditExercise';
import EditWorkout from './EditWorkout/EditWorkout';
import Home from './Home/Home';
import PreviewWorkout from './PreviewWorkout/PreviewWorkout';
import SelectExercise from './SelectExercise/SelectExercise';

function PageContentRouter(props) {
  return (
    <Routes>
      <Route element={<Home />} path='/' exact />
      <Route element={<EditWorkout />} path='/edit-workout' />
      <Route element={<EditWorkout />} path='/edit-workout/:workoutid' />

      <Route element={<EditExercise />} path='/edit-exercise' />
      <Route element={<EditExercise />} path='/edit-exercise/:exerciseid' />

      <Route element={<SelectExercise />} path='/select-exercise' />
      <Route element={<SelectExercise />} path='/select-exercise/:workoutid' />

      <Route element={<PreviewWorkout />} path='/preview-workout/:workoutid' />
      <Route path='/info-workout/:workoutid' />

      <Route
        element={<Activity />}
        path='/activity/:workoutid/:resttime/:exerciseidx'
      />
    </Routes>
  );
}

export default PageContentRouter;
