import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authenticationReducer from './Authentication'
import userReducer from './User'
import refire from '../refire'

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  user: userReducer,
})

window.store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(refire)
))

export default window.store
