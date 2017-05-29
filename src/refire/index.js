import projects from './projects'
import goals from './goals';
import tasks from './tasks';
import resources from './resources';

const ReFire = store => next => action => {
  try {
    const value = next(action)
    projects(store, action);
    goals(store, action);
    resources(store, action);
    tasks(store, action);
    return value;
  } catch (err) {
    throw err
  }
}

export default ReFire;