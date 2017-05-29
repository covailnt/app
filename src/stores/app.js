import {combineReducers, createStore, applyMiddleware} from 'redux';
import projects from './projects';
import goals from './goals';
import resources from './resources';
import tasks from './tasks';
import currentUser from './currentUser';
import currentProject from './currentProject';
import currentGoal from './currentGoal';

import refire from '../refire';

//import firebase from 'firebase';

const rootReducer = combineReducers({
    currentProject,
    currentUser,
    currentGoal,
    projects,
    goals,
    resources,
    tasks
});

window.store = createStore(rootReducer, applyMiddleware(refire));

export default window.store;