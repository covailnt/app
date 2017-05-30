import {combineReducers, createStore, applyMiddleware} from 'redux';
import projects from './projects';
import goals from './goals';
import resources from './resources';
import tasks from './tasks';
import currentUser from './currentUser';
import currentProject from './currentProject';
import currentGoal from './currentGoal';
import users from './users';
import authorizedUsers from './authorizedUsers';

import refire from '../refire';

//import firebase from 'firebase';

const rootReducer = combineReducers({
    currentProject,
    currentUser,
    currentGoal,
    projects,
    goals,
    resources,
    tasks,
    users,
    authorizedUsers
});

window.store = createStore(rootReducer, applyMiddleware(refire));

export default window.store;