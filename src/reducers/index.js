import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authenticationReducer from './Authentication'
import refire from '../refire'
import createSagaMiddleware from 'redux-saga'
import logInSaga from 'sagas'

const rootReducer = combineReducers({
  user: authenticationReducer,
})

const sagaMiddleware = createSagaMiddleware()

window.store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(refire, sagaMiddleware)
))

sagaMiddleware.run(logInSaga)

export default window.store
