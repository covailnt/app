import {combineReducers, createStore, applyMiddleware} from 'redux';
import projects from './projects';
import goals from './goals';
import resources from './resources';
import tasks from './tasks';
import currentUser from './currentUser';
import currentProject from './currentProject';

import refire from '../refire';

//import firebase from 'firebase';

const rootReducer = combineReducers({
    projects,
    goals,
    resources,
    tasks,
    currentProject,
    currentUser
});

window.store = createStore(rootReducer, applyMiddleware(refire));

export default window.store;