import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import refire from 'refire'
import createSagaMiddleware from 'redux-saga'
import fetchUserSaga from 'sagas/FetchUserSaga'
import preloadingReducer from './Preloading'
import userReducer from './User'

const rootReducer = combineReducers({
  preloadingStore: preloadingReducer,
  user: userReducer,
})

const sagaMiddleware = createSagaMiddleware()

window.store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(refire, sagaMiddleware)
  )
)

sagaMiddleware.run(fetchUserSaga)

export default window.store
