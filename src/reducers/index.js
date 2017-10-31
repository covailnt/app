import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import refire from 'refire'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'
import preloadingReducer from './Preloading'
import userReducer from './User'

const rootReducer = combineReducers({
  preloadingStore: preloadingReducer,
  user: userReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(refire, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
