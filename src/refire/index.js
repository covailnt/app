import projects from './projects'
import goals from './goals';

const ReFire = store => next => action => {
  try {
    const value = next(action)
    projects(store, action);
    goals(store, action);
    return value;
  } catch (err) {
    throw err
  }
}

export default ReFire;