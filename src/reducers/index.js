import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authenticationReducer from './Authentication'
import profileReducer from './Profile'
import refire from '../refire'

const rootReducer = combineReducers({
  user: authenticationReducer,
  profile: profileReducer,
})

window.store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(refire)
))

export default window.store
