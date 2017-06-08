import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authenticationReducer from './authentication'

import refire from '../refire'

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
})

window.store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(refire)
))

export default window.store
