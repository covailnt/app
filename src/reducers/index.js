import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authenticationReducer from './Authentication'
import refire from '../refire'

const rootReducer = combineReducers({
  user: authenticationReducer,
})

window.store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(refire)
))

export default window.store
