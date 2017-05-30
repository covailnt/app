import projects from './projects'
import goals from './goals';
import tasks from './tasks';
import resources from './resources';
import authorizedUsers from './authorizedUsers';
import users from './users';

const ReFire = store => next => action => {
  try {
    const value = next(action)
    projects(store, action);
    goals(store, action);
    resources(store, action);
    tasks(store, action);
    users(store, action);
    authorizedUsers(store, action);
    return value;
  } catch (err) {
    throw err
  }
}

export default ReFire;