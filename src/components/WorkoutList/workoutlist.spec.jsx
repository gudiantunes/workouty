import { afterAll, afterEach, beforeAll, describe } from 'vitest';

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import WorkoutList from './WorkoutList';

const allWorkouts = [
  { id: 0, name: 'Workout 1', exercises: {}, weekdays: ['monday, tuesday'] },
  { id: 1, name: 'Workout 2', exercises: {}, weekdays: ['thursday, friday'] },
  { id: 2, name: 'Workout 3', exercises: {}, weekdays: ['wednesday, saturday'] },
];

const server = setupServer(() => {
  rest.get('/api/workouts.json', (req, res, ctx) => {
    return res(ctx.json({ workouts: allWorkouts }));
  });
});

describe('Show Workout List', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should Querry the workouts from the database', async () => {
    render(<WorkoutList />);
    const data = await screen.findAllByRole('listitem');
    expect(data[0]).toHaveTextContent('Workout 1');
    expect(data[2]).toHaveTextContent('Workout 2');
    expect(data[3]).toHaveTextContent('Workout 4');
  });
  it('should filter workouts by weeekday', () => {

  });
  it('should showw all the workouts', () => {});
});
