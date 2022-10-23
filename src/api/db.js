import Dexie from 'dexie';

const database = new Dexie('WorkoutTracker');

database.version(1).stores({
  exercises: '++id, name',
  workouts: '++id, name, weekdays',
});

export { database };
